import React,{useContext,useState} from 'react';
import { useHistory,useParams } from 'react-router';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// package for unique ID generation
import generateUniqueId from 'generate-unique-id';
// for animated spinner
// import {SpinnerDotted} from 'spinners-react';

// package to validate phone number
import "yup-phone";

//modules
import FormControl from './FormControl';
import {UsersContext} from '../Users';

function FormikCreateUser() {

    //fetching data from Provider
    const [UsersData,setUsersData , BaseUrl,fetchUserData] = useContext(UsersContext);

    const history = useHistory();
    
    //Check whether edit or create user
    const pathFlag = history.location.pathname.includes('edit')? 1 : 0 ;

    //code execution for edit user
    const editUserID = useParams();
    let UserTobeEdited = {};
    if(pathFlag){
        let User = UsersData.filter(user => user.uid === editUserID.uid);
        UserTobeEdited = User[0];
    }
    //conditional rendering initial values for create or edit
    const initialValues = {
        id : UserTobeEdited.id || '',
        uid : UserTobeEdited.uid || '',
        username : UserTobeEdited.username || '',
        email : UserTobeEdited.email || '',
        plan : UserTobeEdited.plan || '',
        gender : UserTobeEdited.gender || '',
        phonenumber : UserTobeEdited.phonenumber || '',
        address : UserTobeEdited.address || ''
    }

    const validationSchema = Yup.object({
        username : Yup.string().required('Name is mandatory'),
        email : Yup.string().email('Enter valid email').required('Email is required'),
        plan : Yup.string().required('Select plan'),
        gender : Yup.string().required('Gender is mandatory'),
        phonenumber : Yup.string().phone('Enter valid Number').required('Phone Number is mandatory'),
        address : Yup.string().required('Address is mandatory')
    })
    const onSubmit = async (values,onSubmitProps) => {
        if(!pathFlag){
            values.uid = generateUniqueId({length:36,includeSymbols: ['-']});
            await axios.post(`${BaseUrl}/Users`,values)
        }else{
            await axios.put(`${BaseUrl}//Users/${UserTobeEdited.id}`,values)
        }
        console.log(values)
        onSubmitProps.resetForm();
        fetchUserData();
        history.push('/users')
    }

    const planOptions = [
        {key : 'Bronze',value: 'Bronze'},
        {key : 'Gold',value: 'Gold'},
        {key : 'Starter',value: 'Starter'},
        {key : 'Premium',value: 'Premium'},
        {key : 'Platinum',value: 'Platinum'},
        {key : 'Essential',value: 'Essential'},
        {key : 'Diamond',value: 'Diamond'},
        {key : 'Business',value: 'Business'}
    ]
    const genderRadio = [
        {key:'Male',value:'Male'},
        {key:'Female',value:'Female'},
        {key:'Other',value : 'Other'}
    ]

    return (
        <>
        {
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount>
            {
                (formik) => (
                    <Form>
                        {
                            UserTobeEdited.id
                            ? 
                            <FormControl control='input' type = 'text' label = 'User ID' name='id' disabled = {true} />
                            : <></>
                        }
                        <FormControl control='input' type = 'text' label = 'UserName' name='username' />
                        <FormControl control='input' type = 'email' label = 'Email' name= 'email' />
                        <FormControl control='select' label = 'Plan' name='plan' options = {planOptions} />
                        <FormControl control='radio' label= 'Gender' name="gender" options = {genderRadio} />
                        <FormControl control='input' type="text" name="phonenumber" label = 'PhoneNumber' />
                        <FormControl control='input' type="text" name="address" label="Address" />
                        <button type="submit" className={`btn btn-success ${!(formik.isValid) ? 'not-allowed' : ''}`} disabled= {!(formik.isValid)} >{!pathFlag ? 'Create' : 'Update'}</button>
                    </Form>
                )
            }
        </Formik> 
        }
        </>
    )
}

export default FormikCreateUser