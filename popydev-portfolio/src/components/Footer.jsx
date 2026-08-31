export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>PopyDev</span>
        <span>© {year} · Desplegado con Git + cPanel</span>
      </div>
    </footer>
  )
}
