import "./styles.css";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

export default function TeacherForm() {
  return (
    <div className="container" id="page-teacher-form">
      <PageHeader
        title="How amazing that you want to teach!"
        description="The first step is to fill out this registration form."
      />

      <main>
        <fieldset>
          <legend>Your Info</legend>
          <Input name="name" label="Full Name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>About the class</legend>
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Arts", label: "Arts" },
              { value: "Biology", label: "Biology" },
              { value: "Geography", label: "Geography" },
              { value: "Math", label: "Math" },
              { value: "English", label: "English" },
              { value: "History", label: "History" },
              { value: "Physics", label: "Physics" },
              { value: "Chemistry", label: "Chemistry" },
            ]}
          />
          <Input name="cost" label="Price per class hour" />
        </fieldset>

        <fieldset>
          <legend>
            Schedule
            <button type="button">+ New Appointment</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Day"
              options={[
                { value: "0", label: "Sunday" },
                { value: "1", label: "Monday" },
                { value: "2", label: "Tuesday" },
                { value: "3", label: "Wednesday" },
                { value: "4", label: "Thursday" },
                { value: "5", label: "Friday" },
                { value: "6", label: "Saturday" },
              ]}
            />
            <Input name="from" label="From" type="time" />
            <Input name="to" label="To" type="time" />
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso Importante" />
            Important <br />
            Complete the form carefully.
          </p>
          <button type="button">Save</button>
        </footer>
      </main>
    </div>
  );
}
