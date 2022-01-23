import * as React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Button from "../Button/Button";

const PopUpButton = (props) => {
  const {
    popupBtnText,
    popupQuestion,
    confirmBtnText,
    confirmBtnType,
    rejectBtnText,
    onConfirmClick,
    form,
    btnClassName,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const clickAwayHandler = () => setOpen(false);

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        onClick={handleClick("top")}
        btnText="Cancel"
        className={btnClassName}
        btnText={popupBtnText}
      />

      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        style={{
          paddingTop: "15px",
        }}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              style={{
                backgroundColor: "var(--global-green-89)",
                overflow: "hidden",
                padding: "20px",
                margin: "10px",
                textAlign: "center",
                border: "1px solid var(--global-gray24)",
              }}
            >
              <p>{popupQuestion}</p>
              <div>
                <div style={{ padding: "10px" }}>
                  <Button
                    btnText={confirmBtnText}
                    className="btn--red"
                    onClick={onConfirmClick}
                    form={form}
                    type={confirmBtnType || "button"}
                  />
                </div>
                <div>
                  <Button
                    btnText={rejectBtnText}
                    className="btn--primary"
                    type="button"
                    onClick={clickAwayHandler}
                  />
                </div>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default PopUpButton;
