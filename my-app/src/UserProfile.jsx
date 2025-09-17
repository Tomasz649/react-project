// function UserProfile({ name, description }) {
//     return (
//         <div className="UserProfile">
//             <h1>{name}</h1>
//             <h2>{description}</h2>
//         </div>
//     );
// }

import { useState } from "react";


// export default UserProfile;
function UserProfile({ name, description }) {
    const [likes, setlikes] = useState(0);

    function handdlelike() {
        setlikes(likes + 1)
    }
    function dislike() {
        setlikes(likes - 1)
    }


    return (
        <div className="userProfile">
            <h1>{name}</h1>
            <h2>{description}</h2>
            <p>{likes}</p>
            <button onClick={handdlelike}>polub</button>
            <button onClick={dislike}>odejmij</button>
        </div>
    );
}

export default UserProfile;
