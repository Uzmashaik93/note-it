import React from "react";
import userImage from "./assets/images/user-image.png";
import Card from 'react-bootstrap/Card';
import { useAuth } from "./Components/auth";



const Profile = () =>{
  const authContext = useAuth();

    return(
        <>
      <Card className="profileCard" >
      <Card.Img className="profile" variant="top" src={userImage} />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{authContext.user.email}
        </Card.Title>
        
      </Card.Body>
    </Card>

        </>
    )
}

export default Profile;