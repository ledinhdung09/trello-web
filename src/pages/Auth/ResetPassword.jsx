import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as TrelloLogo } from "~/assets/trello.svg";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

function ResetPassword() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 2,
          width: "400px",
          m: "auto",
          mt: 5,
          p: 3,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
          variant="h5"
        >
          <SvgIcon component={TrelloLogo} inheritViewbox sx={{ mr: 1 }} />
          Trello
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Bạn không thể đăng nhập được?
        </Typography>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "flex-start",
            }}
            variant="caption"
          >
            Chúng tôi sẽ gửi liên kết khôi phục đến
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Nhập email của bạn"
            sx={{
              "& .MuiOutlinedInput-input": {
                p: 1,
              },
            }}
            variant="outlined"
            fullWidth
          />
        </Box>

        <Button sx={{ width: "100%" }} variant="contained" disableElevation>
          Khôi phục mật khẩu
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RouterLink style={{ textDecoration: "none" }} to={"/login"}>
            <MuiLink
              sx={{
                fontSize: "15px",
              }}
              underline="hover"
            >
              {"Quay lại đăng nhập"}
            </MuiLink>
          </RouterLink>
        </Box>
      </Box>
    </>
  );
}

export default ResetPassword;
