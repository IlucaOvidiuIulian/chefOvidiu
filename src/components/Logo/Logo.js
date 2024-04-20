export default function Logo({ width }) {
  return (
    <img
      src={require("../../assets/others/LogoImage.jpg")}
      alt="website logo"
      width={`${width}`}
      style={{ borderRadius: "50%" }}
    />
  );
}
