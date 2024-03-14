import './User.css'
export default function User({profile}){

    return(
        <div className='user'>
            <h4>Name: {profile?.name}</h4>
            <p>Email: {profile?.email}</p>
        </div>
    )
}