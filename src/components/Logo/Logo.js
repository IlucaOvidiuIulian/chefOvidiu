export default function Logo({ width, className }) {
  return (
    <img
      src={require("../../assets/others/LogoImage.jpg")}
      alt="website logo"
      width={`${width}`}
      style={{ borderRadius: "50%" }}
      className={className}
    />
  );
}
