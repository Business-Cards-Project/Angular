import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useHistory } from "react-router-dom"
import { toast } from "react-toastify";
import { API_URL, doApiGet, doApiMethod } from '../../services/apiSer';
import CardsList from '../cardsList';

function EditCard(props) {
  let [card, setCard] = useState({})
  let { register, handleSubmit, setValue, formState: { errors } } = useForm();
  let history = useHistory();

  let nameRef = register("bizName", { required: true, minLength: 2 });
  let descRef = register("bizDescription", { required: true, minLength: 2 });
  let addressRef = register("bizAddress", { required: true, minLength: 2 });
  let phoneRef = register("bizPhone", { required: true, minLength: 2 });
  let imageRef = register("bizImage", { required: false });

  useEffect(() => {
    doApi();
  }, [])

  const doApi = async () => {
    let url = API_URL + "/cards/single/" + props.computedMatch.params.id;
    let card = await doApiGet(url);
    console.log(card);
    setCard(card);

    setValue("bizName", card.bizName)
    setValue("bizDescription", card.bizDescription)
    setValue("bizAddress", card.bizAddress)
    setValue("bizPhone", card.bizPhone)
    setValue("bizImage", card.bizImage)
  }

  const onSubForm = async (dataForm) => {
    console.log(dataForm);
    try {
      let url = API_URL + "/cards/" + props.computedMatch.params.id;
      let data = await doApiMethod(url, "PUT", dataForm);
      console.log(data);
      if (data.n == 1) {
        toast.success(`${card.bizName} Successfully added`);
        history.push("/myBizCards");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Edit Card:</h1>
      <form onSubmit={handleSubmit(onSubForm)} className="row">
        <div className="col-lg-6">
          <label>*Biz name</label>
          <input defaultValue={card.bizName} {...nameRef} type="text" className="form-control mt-2" />
          {errors.bizName &&
            <small className="text-danger">* You must fill your name</small>
          }
        </div>

        <div className="col-lg-6">
          <label>*Biz address</label>
          <input defaultValue={card.bizAddress} {...addressRef} type="text" className="form-control mt-2" />
          {errors.bizAddress &&
            <small className="text-danger">* You must Enter valid address</small>
          }
        </div>
        <div className="col-lg-6">
          <label>*Biz phone</label>
          <input defaultValue={card.bizPhone} {...phoneRef} type="text" className="form-control mt-2" />
          {errors.bizPhone &&
            <small className="text-danger">* You must Enter valid Phone number</small>
          }
        </div>
        <div className="col-lg-6">
          <label>*Biz image url</label>
          <input defaultValue={card.bizImage} {...imageRef} type="text" className="form-control mt-2" />
          {errors.bizImage &&
            <small className="text-danger">* You must Enter valid url</small>
          }
        </div>
        <div className="col-lg-12">
          <label>*Biz info</label>
          <textarea value={card.bizDescription} {...descRef} className="form-control" rows="4"></textarea>
          {errors.bizDescription &&
            <small className="text-danger">* You must enter descrption of biz</small>
          }
        </div>
        <div className="col-12 text-center">
          <NavLink to="/myBizCards" className="btn btn-dark mt-4">Back</NavLink>
          <button className="btn btn-warning ms-3 mt-4">Update Card</button>
        </div>
      </form>
    </div>
  )
}

export default EditCard