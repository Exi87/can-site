const Header = (props) => {
  const { canSigle, canMail, canHoraire, canTel } = props.canInfo;
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-5">
            <p>{canSigle}</p>
          </div>

          <div class="col-md-8 col-sm-7 text-align-right">
            <span class="phone-icon">
              <i class="fa fa-phone"></i> {canTel}
            </span>
            <span class="date-icon">
              <i class="fa fa-calendar-plus-o"></i> {canHoraire}
            </span>
            <span class="email-icon">
              <i class="fa fa-envelope-o"></i>{" "}
              <a href="#" style={{ color: "#4267b2" }}>
                {canMail}
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
