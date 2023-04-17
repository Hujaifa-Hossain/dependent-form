import { useForm } from "react-hook-form";

const Form = () => {

  const {
    register,
    handleSubmit,
    watch,
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  const situation = watch("situation");
  const institution = watch("institution");
  const work = watch("work");

  return (
    <div className="d-flex justify-content-center my-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="m-0 fw-bold">Are you currently studying?</p>

        {/* current box study or not  */}
        <div className="d-flex">
          <div className="m-1">
            <input
              type="radio"
              value="study"
              {...register("situation", { required: true })}
            />
            <span>Yes, I am studying</span>
          </div>
          <div className="m-1">
            <input
              type="radio"
              value="job"
              {...register("situation", { required: true })}
            />
            <span>No, I am not studying</span>
          </div>
        </div>

        {/* if study  */}
        {situation === "study" && (
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

        {/* if not study  */}
        {situation === "job" && (
          <div>
            <p className="m-0 fw-bold">Are you currently?</p>

            <div className="d-flex justify-content-between">
              <div className="m-1">
                <input
                  type="radio"
                  value="looking"
                  {...register("work", { required: true })}
                />
                <span>Looking for a job?</span>
              </div>
              <div className="m-1">
                <input
                  type="radio"
                  value="working"
                  {...register("work", { required: true })}
                />
                <span>Currently working</span>
              </div>
            </div>
          </div>
        )}

        {/* if looking for job  */}
        {work === "looking" && (
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

        {/* if working */}
        {work === "working" && (
          <div>
            <div>
              <input
                placeholder="Your company name"
                className="w-100 p-1 my-1"
                type="type"
                {...register("company-name", { required: true })}
              />

              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Select year of experience</p>
                <select {...register("experience")}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                  <option value="5">Five</option>
                  <option value="6">Six</option>
                  <option value="7">Seven</option>
                  <option value="8">Eight</option>
                  <option value="9">Nine</option>
                </select>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className="m-0">Select your job title</p>
                <select {...register("job-title")}>
                  <option value="frontend">Frontend developer</option>
                  <option value="fullstack">Full Stack developer</option>
                  <option value="ai">AI developer</option>
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
