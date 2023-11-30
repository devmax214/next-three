export const card = {
  bgcolor: "#ffffff", 
  px: 3,
  py: 4,
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.18)",
  borderRadius: 3.5,
}

export const tableCell = (first: boolean, border: boolean) => ({
  py: 0.8,
  fontSize: 13,
  lineHeight: '1.3rem',
  fontWeight: 500,
  borderTop: "1px solid #EDE9DC",
  borderBottom: "none",
  borderColor: border ? "#EDE9DC !important" : "transparent",
  color: first ? '#292F3D': '#ACB1B8',
})