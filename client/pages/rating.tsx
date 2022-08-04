import { MainLayout } from "../layouts/MainLayout";
import { Button } from "@mui/material";
import {
  Paper,
  Typography,
  Tabs,
  Tab,
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
} from "@mui/material";
import FollowButton from "../components/FollowButton/FollowButton";

const Rating: React.FC = () => {
  return (
    <MainLayout hideComments>
      <Paper className="pl-20 pt-20 pr-20 mb-20">
        <Typography
          style={{ fontWeight: "bold", fontSize: 30, marginBottom: 6 }}
          variant="h5"
        >
          Рейтинг сообщества и блогов
        </Typography>
        <Typography>
          Десять лучших авторов и комментариев, а также администраторы первых
          десяти сообществ из рейтинга по итогам месяца бесплатно получат
          Plus-аккаунт на месяц
        </Typography>
        <Tabs value={0} indicatorColor="primary" textColor="primary">
          <Tab label="Август" />
          <Tab label="За 3 месяца" />
          <Tab label="За все время" />
        </Tabs>
      </Paper>
      <Paper className="pl-20 pt-20 pr-20 mb-20">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell align="right">Рейтинг</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Вася Пупкин
              </TableCell>
              <TableCell align="right">540</TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  );
};

export default Rating;