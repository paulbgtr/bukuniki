// this component is a form that will be used to delete the user's account.

// todo: a confirmation form on the screen that will ask the user to confirm the deletion of their account.
import React, { FC } from "react";

import Button from "../../components/Buttons/Button";

const Delete: FC = () => {
  return (
    <div>
      <h5 className="text-lg font-bold">Delete Account</h5>
      <p>
        This is the danger zone where you can completely delete your account.
      </p>
      <p>
        After submitting, you will get a confirmation email. After being
        confirmed, there will be no way to go back.
      </p>
      <Button className="mt-3" variant="danger">
        Delete Account
      </Button>
    </div>
  );
};

export default Delete;
