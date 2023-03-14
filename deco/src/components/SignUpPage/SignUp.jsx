import WelcomeInfo from "@/components/Common/WelcomeInfo/WelcomeInfo";
import FormInput from "@/components/Common/FormInput/FormInput";
import SubmitButton from "@/components/Common/SubmitButton/SubmitButton";
import styles from "./SignUp.module.css";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { ReactComponent as FileUpload } from "../../assets/file_upload.svg";

const SignUp = () => {
  return (
    <div className={styles.container}>
      <WelcomeInfo subtitle="DECO의 일원이 되어주세요 !" />

      <Profile className={styles.profile} alt="프로필 이미지" />
      <p className={styles.profile_info}>이미지를 설정해주세요 !</p>

      <form className={styles.form}>
        <label htmlFor="file" className={styles.profile_label}>
          <FileUpload className={styles.profile_image} /> 파일 업로드
        </label>

        <input
          id="file"
          type="file"
          accept="image/jpg, image/png, image/jpeg"
          name="profile"
          className={styles.profile_form}
        />

        <FormInput name="id" label="아이디" placeholder="아이디 입력" />
        <FormInput
          name="password"
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
        />
        <FormInput
          name="email"
          type="email"
          label="이메일"
          placeholder="이메일 입력"
        />
        <FormInput name="nickname" label="닉네임" placeholder="닉네임 입력" />

        <SubmitButton props="회원가입" />
      </form>
    </div>
  );
};

export default SignUp;
