import "./styles.css";

import PageHeader from "../../components/PageHeader/";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function TeacherList() {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Available Teachers.">
        <form id="search-teachers">
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

          <Input name="time" label="Time" type="time" />
        </form>
      </PageHeader>

      <main>
      <TeacherItem
        avatar="https://hips.hearstapps.com/hmg-prod/images/gettyimages-491422932-copy.jpg"
        name="Leonard Euler"
        subject="Math"
        bio="Math is the queen of all sciences."
        price={15.00}
      />
      <TeacherItem
        avatar="https://s4.static.brasilescola.uol.com.br/be/conteudo/images/2-albert-einstein.jpg"
        name="Albert Einstein"
        subject="Physics"
        bio="The supreme task of the physicist is to arrive at those universal elementary laws from which the cosmos can be built up by pure deduction."
        price={15.00}
      />
      <TeacherItem
        avatar="https://golfinhorotador.org.br/wp-content/uploads/2017/02/Charles-Darwin.jpg"
        name="Charles Darwin"
        subject="Biology"
        bio="It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change."
        price={15.00}
      />
      <TeacherItem
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/250px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
        name="Vincent van Gogh"
        subject="Arts"
        bio="I put my heart and my soul into my work, and have lost my mind in the process."
        price={15.00}
      />
      <TeacherItem
        avatar="https://boo-prod.b-cdn.net/database/profiles/16792957500379a8e71605250020c850ce8d863da239b.jpg"
        name="Walter White"
        subject="Chemistry"
        bio="I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot and you think that of me? No. I am the one who knocks."
        price={15.00}
      />
      <TeacherItem
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/1200px-Shakespeare.jpg"
        name="William Shakespeare"
        subject="English"
        bio="All the world's a stage, And all the men and women merely players;"
        price={15.00}
      />
      </main>
    </div>
  );
}
