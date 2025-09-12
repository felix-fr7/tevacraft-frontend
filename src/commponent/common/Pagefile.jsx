import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const languages = [
  "Afrikaans","Albanian","Arabic","Armenian","Bengali","Bosnian","Bulgarian",
  "Catalan","Chinese (Simplified)","Chinese (Traditional)","Croatian","Czech",
  "Danish","Dutch","English","Estonian","Finnish","French","German","Greek",
  "Gujarati","Hebrew","Hindi","Hungarian","Indonesian","Italian","Japanese",
  "Kannada","Kazakh","Korean","Latvian","Lithuanian","Malay","Malayalam",
  "Marathi","Mongolian","Nepali","Norwegian","Pashto","Persian","Polish",
  "Portuguese","Punjabi","Romanian","Russian","Serbian","Sinhala","Slovak",
  "Slovenian","Spanish","Swahili","Swedish","Tamil","Telugu","Thai","Turkish",
  "Ukrainian","Urdu","Uzbek","Vietnamese"
];

const domains = ["Technical", "Educational", "Medical", "Legal", "Finance", "IT"];
const expertise = ["Translation", "Proofreading", "Editing", "Localization"];

const Pagefile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

 const onSubmit = async (data) => {
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach((val) => formData.append(key, val));
      } else {
        formData.append(key, data[key]);
      }
    });

    if (data.resume && data.resume[0]) {
      formData.append("resume", data.resume[0]);
    }

    const response = await axios.post(
      "https://tevacraft-back.onrender.com/register/postdetails",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (response.status === 200) {
      alert("✅ Registered Successfully");
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("❌ This email is already registered!");
    } else {
      alert("❌ Something went wrong. Try again!");
    }
    console.error(error);
  }
};


  return (
    <div className="mainform">
      <h2 className="powerheading" style={{ color: "#B96CFD" }}>Enrolment form</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        {/* Email */}
        <input placeholder="Enter your email" type="email" {...register("email", { required: true })} />

        {/* First & Last Name */}
        <input placeholder="First Name" type="text" {...register("firstname", { required: true })} />
        <input placeholder="Last Name" type="text" {...register("lastname", { required: true })} />

        {/* Gender */}
        <select {...register("gender", { required: true })}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {/* DOB */}
        <input type="date" {...register("dob", { required: true })} />

        {/* Phone */}
        <input type="tel" placeholder="Phone" {...register("phone", { required: true })} />

        {/* Education */}
        <select {...register("education", { required: true })}>
          <option value="">Select Education</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>

       {/* Source Language */}
<label>Source Language(s)</label>
<div className="checkbox-group scrollbar">
  {languages.map((lang) => (
    <label key={lang} className="checkbox-item">
      <input type="checkbox" value={lang} {...register("sourcelanguage")} /> {lang}
    </label>
  ))}
</div>

       {/* Target Language */}
<label>Target Language(s)</label>
<div className="checkbox-group scrollbar">
  {languages.map((lang) => (
    <label key={lang} className="checkbox-item">
      <input type="checkbox" value={lang} {...register("targetlanguage")} /> {lang}
    </label>
  ))}
</div>

        {/* Domain */}
        <label>Domain</label>
        {domains.map((d) => (
          <label key={d}>
            <input type="checkbox" value={d} {...register("domain")} /> {d}
          </label>
        ))}

        {/* Expertise */}
        <label>Expertise</label>
        {expertise.map((e) => (
          <label key={e}>
            <input type="checkbox" value={e} {...register("expertise")} /> {e}
          </label>
        ))}

        {/* Industry */}
        {/* <input placeholder="Industry" {...register("industry", { required: true })} /> */}

        {/* Bank Info */}
        <input placeholder="Beneficiary Name" {...register("beneficiary", { required: true })} />
        <input placeholder="Bank Account Number" {...register("accountno", { required: true })} />
        <input placeholder="Bank Branch Address" {...register("branchaddress", { required: true })} />
        <input placeholder="IFSC Code" {...register("ifsc", { required: true })} />

        {/* Resume Upload */}
        <label>Upload Resume</label>
        <input type="file" accept=".pdf,.doc,.docx" {...register("resume", { required: true })} />

        {/* Experience */}
        <input type="number" placeholder="Experience in Years" {...register("experience", { required: true })} />

        {/* Submit */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Pagefile;
