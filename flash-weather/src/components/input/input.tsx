import { useState, ChangeEvent } from "react";
import { useWeatherContext } from "../../providers/weather.provider";
import { useNavigate } from "react-router-dom";
import "./input.css";
import { getWeatherbyLocation } from "../../services/weather.service";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

function Input() {
  const navigate = useNavigate();
  const { getData } = useWeatherContext();
  const [location, setLocation] = useState("");
  const [snack, setSnack] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocation(event.target.value);
  };

  const getweather = (location: string) => {
    setLoading(true);
    getWeatherbyLocation(location)
      .then((data) => {
        getData({
          current: data.current,
          location: data.location,
          forecast: data.forecast,
        });
        navigate("/detalle");
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setSnack(true);
      });
  };

  const handleCloseSnack = (reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack(false);
  };

  return (
    <div className="containerInput">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar
        open={snack}
        autoHideDuration={2000}
        message={
          "Hubo un error, recuerde escribir correctamente el nombre de la ciudad"
        }
        onClose={() => handleCloseSnack()}
      />
      <TextField
        fullWidth
        autoComplete={"off"}
        margin="normal"
        variant="outlined"
        name="location"
        placeholder="Nombre de la ciudad en inglés"
        sx={{
          marginRight: 1,
        }}
        onChange={(event) => onChange(event)}
      />
      <IconButton
        size="large"
        color="primary"
        disabled={location === ""}
        onClick={() => getweather(location)}
      >
        <SearchOutlinedIcon />
      </IconButton>
    </div>
  );
}

export default Input;
