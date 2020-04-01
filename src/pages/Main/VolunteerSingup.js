import React, { useEffect } from "react";
import { IndividualForm, OrganizationForm } from "@components/VolunteerForm";
import FormToggle from "@components/FormToggle";
import { connecter } from "@store/volunteerSignup";
import options from "@utils/Options";

function VolunteerSingup({ reset, mode, setMode, save }) {
  useEffect(() => {}, []);

  function handleSubmit(formData) {
    if (formData) {
      console.log("formdata", formData);
      formData.mode = mode;
      save(formData);
    }
  }

  // default to Karnataka, Bangalore
  const initialValues = {
    region: ["KA", "5"]
  };

  return (
    <div style={{ textAlign: "left" }}>
      <h2>Volunteer Singup Form</h2>
      <FormToggle value={mode} handleChange={setMode} />
      <div style={{ margin: 30 }}>
        {mode === "individual" ? (
          <IndividualForm
            onSubmit={handleSubmit}
            reset={reset}
            {...options}
            initialValues={initialValues}
          />
        ) : (
          <OrganizationForm
            onSubmit={handleSubmit}
            reset={reset}
            {...options}
            initialValues={initialValues}
          />
        )}
      </div>
    </div>
  );
}

export default connecter(VolunteerSingup);
