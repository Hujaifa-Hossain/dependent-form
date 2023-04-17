import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const current = watch("current");
  const institution = watch("institution");
  console.log(current, institution);

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="m-0 fw-bold">Are you currently studying?</p>

        {/* current box study or not  */}
        <div className="d-flex">
          <div className="m-1">
            <input
              type="radio"
              value="study"
              {...register("current", { required: true })}
            />
            <span>Yes, I am studying</span>
          </div>
          <div className="m-1">
            <input
              type="radio"
              value="job"
              {...register("current", { required: true })}
            />
            <span>No, I am not studying</span>
          </div>
        </div>

        {/* if study  */}
        {current === "study" && (
          <div>
            <p className="m-0 fw-bold">Are you currently?</p>

            <div className="d-flex justify-content-between">
              <div className="m-1">
                <input
                  type="radio"
                  value="school"
                  {...register("institution", { required: true })}
                />
                <span>In school</span>
              </div>
              <div className="m-1">
                <input
                  type="radio"
                  value="college"
                  {...register("institution", { required: true })}
                />
                <span>In college</span>
              </div>
            </div>
          </div>
        )}

        {/* if institution is school  */}
        {institution === "school" && (
          <div>
            <div>
              <input
              placeholder="Your school name"
                className="w-100 p-1 my-1"
                type="type"
                {...register("school-name", { required: true })}
              />

              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Select your grade</p>
                <select {...register("grade")}>
                  <option value="six">Six</option>
                  <option value="seven">Seven</option>
                  <option value="eight">Eight</option>
                  <option value="nine">Nine</option>
                  <option value="ten">Ten</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {/* if institution is college  */}
        {institution === "college" && (
          <div>
            <div>
              <input
              placeholder="Your college name"
                className="w-100 p-1 my-1"
                type="type"
                {...register("college-name", { required: true })}
              />

              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Select your latest degree</p>
                <select {...register("degree")}>
                  <option value="BTech">BTech</option>
                  <option value="bsc">BSC</option>
                  <option value="bba">BBA</option>
                  <option value="mba">MBA</option>
                </select>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Select your graduation year</p>
                <select {...register("year")}>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <input className="w-100 bg-success my-1" type="submit" />
      </form>
    </div>
  );
};

export default Form;
