// src/components/CreditCard.jsx
import React from "react";
import visaImg from "fe-app1-part2/src/assets/images/visa.png";
import masterCardImg from "assets/images/master-card.svg";

/**
 * Props:
 * - type: "Visa" | "Master Card"
 * - number: string (e.g. "0123456789018875")
 * - expirationMonth: number (1-12)
 * - expirationYear: number (e.g. 2021)
 * - bank: string
 * - owner: string
 * - bgColor: string (background color)
 * - color: string (text color)
 */
function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor = "#eeeeee",
  color = "#222222",
}) {
  // Mask card number: show only last 4 digits, group into blocks for display
  const last4 = number.slice(-4);
  const masked = `•••• •••• •••• ${last4}`;

  // Format month with leading zero
  const mm = String(expirationMonth).padStart(2, "0");
  // Get last two digits of year
  const yy = String(expirationYear).slice(-2);

  // Choose logo based on type
  const logo = type.toLowerCase().includes("visa")
    ? visaImg
    : masterCardImg;

  return (
    <div
      style={{
        background: bgColor,
        color: color,
        width: "420px",
        height: "220px",
        borderRadius: "12px",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
      }}
    >
      {/* Top row: bank name (left) and logo (right) */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontWeight: "600", fontSize: "16px" }}>{bank}</div>
        <img
          src={logo}
          alt={type}
          style={{ width: "60px", height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Card number */}
      <div style={{ fontSize: "24px", letterSpacing: "2px", marginTop: "6px" }}>
        {masked}
      </div>

      {/* Bottom row: expiration and owner */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div style={{ fontSize: "12px", opacity: 0.9 }}>
            <div style={{ fontSize: "10px", marginBottom: "4px" }}>Expires</div>
            <div style={{ fontWeight: "600" }}>{mm}/{yy}</div>
          </div>
        </div>

        <div style={{ textAlign: "right", fontSize: "14px", fontWeight: 600 }}>
          {owner}
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
