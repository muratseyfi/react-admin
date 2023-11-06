import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import "./user.scss";

const User = () => {

// Fetch Data and Send to Single Component

  return (
    <div className="user">
        <Single {...singleUser} />
    </div>
  )
}

export default User;