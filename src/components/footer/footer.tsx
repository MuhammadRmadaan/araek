const Footer = () => {
  return ( 
    <footer className="mt-28 bg-main-gold-dark">
      <div className="container mx-auto px-3 sm:px-0 py-12 text-white/70 font-medium sm:text-xl text-center">
        <p>
          بواسطة{" "}
          <a
            href="https://athr.company"
            rel="noreferrer"
            target="_blank"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#F37335] to-[#FDC830]"
          >
            ATHR
          </a>
          <br />
          جميع الحقوق محفوظة ©{" "}
          <span id="date-year">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;