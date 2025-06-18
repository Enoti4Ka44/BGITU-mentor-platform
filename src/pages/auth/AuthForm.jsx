import { useState } from "react";
import Input from "../../components/ui/input/Input";

const AuthForm = ({ isLoading, isLogin, onSubmit }) => {
  const [authData, setAuthData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    if (!isLogin && authData.confirmPassword !== authData.password) {
      setError("Пароли должны совпадать!");
    } else {
      onSubmit(authData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <Input
            value={authData.firstName}
            name="firstName"
            type="text"
            required={true}
            label="Имя"
            placeholder="Имя"
            onChange={handleChange}
          />

          <Input
            value={authData.lastName}
            name="lastName"
            type="text"
            required={true}
            label="Фамилия"
            placeholder="Фамилия"
            onChange={handleChange}
          />

          <div>
            <select
              value={authData.role}
              name="role"
              required
              onChange={handleChange}
            >
              <option value="" disabled>
                Выберите роль
              </option>
              <option value="student">Студент</option>
              <option value="mentor">Ментор</option>
            </select>
          </div>
        </>
      )}

      <Input
        value={authData.email}
        name="email"
        type="email"
        required={true}
        placeholder="Почта"
        label="Почта"
        onChange={handleChange}
      />

      <Input
        value={authData.password}
        name="password"
        type={showPassword ? "text" : "password"}
        required={true}
        label="Пароль"
        placeholder="Пароль"
        minLength="5"
        onChange={handleChange}
      />

      <Input
        value={authData.confirmPassword}
        name="confirmPassword"
        type={showPassword ? "text" : "password"}
        required={true}
        placeholder="Повторите пароль"
        label="Повторите пароль"
        minLength="5"
        onChange={handleChange}
      />

      <div>
        <input
          type="checkbox"
          name="showPassword"
          id="showPassword"
          value={showPassword}
          onChange={(e) => setShowPassword((prev) => !prev)}
        />
        <label htmlFor="showPassword">Показать пароль</label>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">{isLogin ? "Войти" : "Зарегистрироваться"}</button>
    </form>
  );
};

export default AuthForm;
