import { useState } from "react";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import Logo from "../../components/ui/logo/Logo";
import Select from "../../components/ui/select/Select";
import styles from "./AuthForm.module.scss";
import { useNavigate } from "react-router";
import navigateTo from "../../services/navigateTo";
import icon from "../../assets/images/icons/auth-icon.svg";
import { toast } from "react-toastify";

const AuthForm = ({ isLoading, isLogin, onSubmit }) => {
  const [authData, setAuthData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });
  const roleOptions = [
    { value: "STUDENT", label: "Студент" },
    { value: "MENTOR", label: "Ментор" },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const navigation = navigateTo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && authData.confirmPassword !== authData.password) {
      toast.error("Пароли должны совпадать");
    } else {
      onSubmit(authData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.formContainerHeader}>
            <Logo route="welcome" />
            {isLogin ? (
              <p className={styles.links}>
                Нет аккаунта ?{" "}
                <a onClick={() => navigation("register")}>Зарегистрироваться</a>
              </p>
            ) : (
              <p className={styles.links}>
                Есть аккаунт ? <a onClick={() => navigation("login")}>Войти</a>
              </p>
            )}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <Input
                  value={authData.firstName}
                  name="firstName"
                  id="firstName"
                  type="text"
                  required={true}
                  label="Имя"
                  placeholder="Имя"
                  onChange={handleChange}
                />

                <Input
                  value={authData.lastName}
                  name="lastName"
                  id="lastName"
                  type="text"
                  required={true}
                  label="Фамилия"
                  placeholder="Фамилия"
                  onChange={handleChange}
                />

                <Select
                  value={authData.role}
                  options={roleOptions}
                  name="role"
                  label="Роль"
                  placeholder="Выберите роль"
                  onChange={handleChange}
                />
              </>
            )}

            <Input
              value={authData.email}
              name="email"
              id="email"
              type="email"
              required={true}
              placeholder="Почта"
              label="Почта"
              onChange={handleChange}
            />

            <Input
              value={authData.password}
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
              required={true}
              label="Пароль"
              placeholder="Пароль"
              minLength="5"
              onChange={handleChange}
            />

            {!isLogin && (
              <Input
                value={authData.confirmPassword}
                name="confirmPassword"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                required={true}
                placeholder="Повторите пароль"
                label="Повторите пароль"
                minLength="5"
                onChange={handleChange}
              />
            )}

            <div className={styles.passwordCheckbox}>
              <input
                type="checkbox"
                name="showPassword"
                id="showPassword"
                value={showPassword}
                onChange={(e) => setShowPassword((prev) => !prev)}
              />
              <label htmlFor="showPassword">Показать пароль</label>
            </div>

            <Button disabled={isLoading} color="green">
              {isLoading
                ? "Загрузка..."
                : isLogin
                ? "Войти"
                : "Зарегистрироваться"}
            </Button>
          </form>
        </div>

        <div className={styles.content}>
          <img src={icon} alt="image of devices" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
