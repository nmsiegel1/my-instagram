import profileIcon from '../assets/profileIcon.svg'
const Bio = () => {
const editForm = (
    <form className='edit-bio-form'>
        <input type='text' id='' placeholder='Your name' />
        <input type='text' id='' placeholder='About you' />
        <br />
        <button type="button" id="" className='cancel-button'>Cancel</button>
        <button type='button'>Save</button>

    </form>
)
    return (
<section className="bio">
    <div className="profile-photo" role='button' title='Click to edit photo'>
        <img src={profileIcon} alt='profile' />
    </div>
    <div className='profile-info'>
        <p className='name'>Nina</p>
        <p className='about'>Learning react</p>
        <button>Edit</button>
        {editForm}
    </div>
</section>
    )
}

export default Bio