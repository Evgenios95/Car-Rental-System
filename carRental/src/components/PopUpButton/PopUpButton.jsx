import * as React from "react";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Button from "../Button/Button";

export function PopUpButton({
  popupQuestionText,
  confirmChoiceButtonText,
  rejectChoiceButtonText,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const clickAwayHandler = () => setOpen(false);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Button
        onClick={handleClick("top")}
        btnText="Cancel"
        btnBgColor={"var(--global-93)"}
        btnColor={"var(--global-gray24"}
        type="button"
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
              <p>{popupQuestionText}</p>
              <div>
                <div style={{ padding: "10px" }}>
                  <Button
                    btnText={confirmChoiceButtonText}
                    btnBgColor="red"
                    onClick={() => window.location.reload(false)}
                  />
                </div>
                <div>
                  <Button
                    onClick={clickAwayHandler}
                    btnText={rejectChoiceButtonText}
                    type="button"
                  />
                </div>
              </div>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default PopUpButton;
