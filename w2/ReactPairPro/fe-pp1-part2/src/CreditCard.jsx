import visaImg from "./assets/images/visa.png";
import masterImg from "./assets/images/master.png";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  const last4Digits = number.slice(-4);
  const maskedNumber = "•••• •••• •••• " + last4Digits;

  const month = String(expirationMonth).padStart(2, "0");
  const year = String(expirationYear).slice(-2);

  const logo = type.toLowerCase().includes("visa") ? visaImg : masterImg;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: "400px",
        height: "220px",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)"
      }}
    >
      {}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontWeight: "600" }}>{bank}</span>
        <img src={logo} alt={type} style={{ width: "60px" }} />
      </div>

      {}
      <div style={{ fontSize: "28px", letterSpacing: "2px" }}>{maskedNumber}</div>

      {}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
        <span>
          Expires {month}/{year}
        </span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
