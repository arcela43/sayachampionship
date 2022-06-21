import React from "react";

import { Button, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import DancerForm from "../../components/Forms/DancerForm";
import "../../App.css";

const CreateDancers = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    lastName: "",
    ci: "0",
    gender: [],
    birthdate: "",
    address: "",
    state: [],
  };

  return (
    <>
      <h4>Create Dancer</h4>
      <section className="border-box">
        <DancerForm dancer={initialValues} type="Agregar" />
      </section>
      <Button
        className="blue_background"
        fab={{
          direction: "left",
        }}
        icon={<Icon>arrow_back</Icon>}
        floating
        small
        node="button"
        onClick={() => navigate(-1)}
      ></Button>
    </>
  );
};

export default CreateDancers;
