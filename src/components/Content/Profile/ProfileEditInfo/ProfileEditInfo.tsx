import React from "react";
import s from "./ProfileEditInfo.module.css";
import imgAbout from "../../../../assets/linkimg/about.png";
import imgJob from "../../../../assets/linkimg/job.png";
import imgFB from "../../../../assets/linkimg/facebook.png";
import imgWeb from "../../../../assets/linkimg/site.png";
import imgVK from "../../../../assets/linkimg/vk.png";
import imgTW from "../../../../assets/linkimg/twitter.png";
import imgIG from "../../../../assets/linkimg/instagram.png";
import imgYB from "../../../../assets/linkimg/youtube.png";
import imgGH from "../../../../assets/linkimg/git.png";
import imgGM from "../../../../assets/linkimg/gmail.png";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator} from "../../../../utils/validators/validators";
import {Input} from "../../common/formsControls/FormsControl";


/*1
/*
type TProps = {
    profile: profileType
    toggleIsEditProfileInfoAC: (isEditProfileInfo: boolean) => void
}
*/
/*
const ProfileEditInfo2: React.FC<TProps> = props => {

    const {
        profile,
        toggleIsEditProfileInfoAC
    } = props

    const SaveAndSendEditData = () => {
        toggleIsEditProfileInfoAC(false)
    }



    return (
        <div>













            <div>
                <img className={s.descImg} src={imgGM}/>
                <input value={profile.contacts.mainLink === null ? 'null' : profile.contacts.mainLink}/>
            </div>

            <div className={s.container}>
                <button className={s.button} onClick={() => SaveAndSendEditData()}>Save Info</button>
                <button className={s.button} onClick={() => toggleIsEditProfileInfoAC(false)}>Cancel</button>
            </div>

            <hr/>
            <hr/>



        </div>
    )
}*/
/*
export const ProfileEditInfoForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>

        <div>
            <img className={s.descImg} src={imgAbout}/>
            <Field
                placeholder={'fullName'}
                component={Input}
                name={'fullName'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgAbout}/>
            <Field
                placeholder={'aboutMe'}
                component={Input}
                name={'aboutMe'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgJob}/>
            <Field
                component={Input}
                name={'lookingForAJob'}
                type={'checkbox'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgJob}/>
            <Field
                placeholder={'lookingForAJobDescription'}
                component={Input}
                name={'lookingForAJobDescription'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgFB}/>
            <Field
                placeholder={'facebook'}
                component={Input}
                name={'facebook'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgWeb}/>
            <Field
                placeholder={'website'}
                component={Input}
                name={'website'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgVK}/>
            <Field
                placeholder={'vk'}
                component={Input}
                name={'vk'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgTW}/>
            <Field
                placeholder={'twitter'}
                component={Input}
                name={'twitter'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgIG}/>
            <Field
                placeholder={'instagram'}
                component={Input}
                name={'instagram'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgYB}/>
            <Field
                placeholder={'youtube'}
                component={Input}
                name={'youtube'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgGH}/>
            <Field
                placeholder={'github'}
                component={Input}
                name={'github'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgGM}/>
            <Field
                placeholder={'mainLink'}
                component={Input}
                name={'mainLink'}
                type={'string'}
            />
        </div>

        <div>
            <button>Save</button>
        </div>

    </form>
}

const ProfileEditInfoReduxForm = reduxForm({
    form: 'ProfileEditInfo'
})(ProfileEditInfoForm)


type MSTPType = {
    profile: profileType
}

type MDTPType = {
    saveProfileInfoTC: (formData: any) => void
    toggleIsEditProfileInfoAC: (isEditProfileInfo: boolean) => void
}

type ProfileEditInfoType = MSTPType & MDTPType

const MSTP = (state: AppStateType): MSTPType => {
    return {
        profile: state.profilePage.profile
    }
}

const MDTP: MDTPType = {
    saveProfileInfoTC,
    toggleIsEditProfileInfoAC
}

const ProfileEditInfo = (props: ProfileEditInfoType) => {

    const onSubmit = (formData: any) => {
        props.toggleIsEditProfileInfoAC(false)
        props.saveProfileInfoTC(formData)
        console.log(formData)
    }

    return (
        <div>
            <ProfileEditInfoReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

export default connect(MSTP, MDTP)(ProfileEditInfo)*/
/*
return <Grid container justify="center">
    <Grid item xs={4}>
        <FormControl>
            <FormLabel>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}>here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </FormLabel>

            <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <TextField
                        label="Email"
                        margin="normal"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}

                    <TextField
                        type="password"
                        label="Password"
                        {...formik.getFieldProps('password')}
                    />
                    {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}

                    <FormControlLabel
                        label={'Remember me'}
                        control={<Checkbox
                            {...formik.getFieldProps('rememberMe')}
                        />}
                    />
                    <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                </FormGroup>
            </form>

        </FormControl>
    </Grid>
</Grid>
}

*/
/*


<div>
{(profile.aboutMe != null)
    ? <div className={s.aboutMe}>
        <img className={s.descriptionImg} src={imgAbout}/>
        <span className={s.descriptionSpan}> {profile.aboutMe}</span>
    </div>
    : <></>
}

{(profile.lookingForAJob)
    ? <div className={s.aboutMe}>
        <img className={s.descriptionImg} src={imgJob}/>
        <span
            className={s.descriptionSpan}> {profile.lookingForAJobDescription}</span>
    </div>
    : <></>
}

<div className={s.container}>
    {(profile.contacts.facebook != null)
        ? <a href={profile.contacts.facebook}>
            <img src={imgFB} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.website != null)
        ? <a href={profile.contacts.website}>
            <img src={imgWeb} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.vk != null)
        ? <a href={profile.contacts.vk}>
            <img src={imgVK} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.twitter != null)
        ? <a href={profile.contacts.twitter}>
            <img src={imgTW} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.instagram != null)
        ? <a href={profile.contacts.instagram}>
            <img src={imgIG} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.youtube != null)
        ? <a href={profile.contacts.youtube}>
            <img src={imgYB} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.github != null)
        ? <a href={profile.contacts.github}>
            <img src={imgGH} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.mainLink != null)
        ? <a href={profile.contacts.mainLink}>
            <img src={imgGM} className={s.linkImg}/>
        </a>
        : <></>}

</div>
</div>*//*


<div>
{(profile.aboutMe != null)
    ? <div className={s.aboutMe}>
        <img className={s.descriptionImg} src={imgAbout}/>
        <span className={s.descriptionSpan}> {profile.aboutMe}</span>
    </div>
    : <></>
}

{(profile.lookingForAJob)
    ? <div className={s.aboutMe}>
        <img className={s.descriptionImg} src={imgJob}/>
        <span
            className={s.descriptionSpan}> {profile.lookingForAJobDescription}</span>
    </div>
    : <></>
}

<div className={s.container}>
    {(profile.contacts.facebook != null)
        ? <a href={profile.contacts.facebook}>
            <img src={imgFB} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.website != null)
        ? <a href={profile.contacts.website}>
            <img src={imgWeb} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.vk != null)
        ? <a href={profile.contacts.vk}>
            <img src={imgVK} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.twitter != null)
        ? <a href={profile.contacts.twitter}>
            <img src={imgTW} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.instagram != null)
        ? <a href={profile.contacts.instagram}>
            <img src={imgIG} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.youtube != null)
        ? <a href={profile.contacts.youtube}>
            <img src={imgYB} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.github != null)
        ? <a href={profile.contacts.github}>
            <img src={imgGH} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.mainLink != null)
        ? <a href={profile.contacts.mainLink}>
            <img src={imgGM} className={s.linkImg}/>
        </a>
        : <></>}

</div>
</div>*/
/*


<div>
{(profile.aboutMe != null)
    ? <div className={s.aboutMe}>
        <img className={s.descriptionImg} src={imgAbout}/>
        <span className={s.descriptionSpan}> {profile.aboutMe}</span>
    </div>
    : <></>
}

{(profile.lookingForAJob)
    ? <div className={s.aboutMe}>
        <img className={s.descriptionImg} src={imgJob}/>
        <span
            className={s.descriptionSpan}> {profile.lookingForAJobDescription}</span>
    </div>
    : <></>
}

<div className={s.container}>
    {(profile.contacts.facebook != null)
        ? <a href={profile.contacts.facebook}>
            <img src={imgFB} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.website != null)
        ? <a href={profile.contacts.website}>
            <img src={imgWeb} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.vk != null)
        ? <a href={profile.contacts.vk}>
            <img src={imgVK} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.twitter != null)
        ? <a href={profile.contacts.twitter}>
            <img src={imgTW} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.instagram != null)
        ? <a href={profile.contacts.instagram}>
            <img src={imgIG} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.youtube != null)
        ? <a href={profile.contacts.youtube}>
            <img src={imgYB} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.github != null)
        ? <a href={profile.contacts.github}>
            <img src={imgGH} className={s.linkImg}/>
        </a>
        : <></>}

    {(profile.contacts.mainLink != null)
        ? <a href={profile.contacts.mainLink}>
            <img src={imgGM} className={s.linkImg}/>
        </a>
        : <></>}

</div>
</div>*/

const maxLength50 = maxLengthCreator(50)

const ProfileEditInfoFormTwo = ({handleSubmit, error}: any) => {
    return <form>
        <div>
            <img className={s.descImg} src={imgAbout}/>
            <Field
                placeholder={'fullName'}
                component={Input}
                name={'fullName'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgAbout}/>
            <Field
                placeholder={'aboutMe'}
                component={Input}
                name={'aboutMe'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgJob}/>
            <Field
                component={Input}
                name={'lookingForAJob'}
                type={'checkbox'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgJob}/>
            <Field
                placeholder={'lookingForAJobDescription'}
                component={Input}
                name={'lookingForAJobDescription'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgFB}/>
            <Field
                placeholder={'facebook'}
                component={Input}
                name={'contacts.facebook'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgWeb}/>
            <Field
                placeholder={'website'}
                component={Input}
                name={'contacts.website'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgVK}/>
            <Field
                placeholder={'vk'}
                component={Input}
                name={'contacts.vk'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgTW}/>
            <Field
                placeholder={'twitter'}
                component={Input}
                name={'contacts.twitter'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgIG}/>
            <Field
                placeholder={'instagram'}
                component={Input}
                name={'contacts.instagram'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgYB}/>
            <Field
                placeholder={'youtube'}
                component={Input}
                name={'contacts.youtube'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgGH}/>
            <Field
                placeholder={'github'}
                component={Input}
                name={'contacts.github'}
                type={'string'}
            />
        </div>

        <div>
            <img className={s.descImg} src={imgGM}/>
            <Field
                placeholder={'mainLink'}
                component={Input}
                name={'contacts.mainLink'}
                type={'string'}
            />
        </div>

        {error &&
        <div className={s.formSummaryError}>
            {error}
        </div>
        }

        <div className={s.container}>
            <button className={s.button} onClick={handleSubmit}>Save</button>
            <button className={s.button}>Cancel</button>
        </div>

    </form>
}

export const ProfileEditInfoFormTwoReduxForm = reduxForm({form: 'editProfile'})(ProfileEditInfoFormTwo)

//onSubmit={handleSubmit}