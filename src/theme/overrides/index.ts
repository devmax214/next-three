import merge from "lodash/merge";
import { Theme } from "@mui/material/styles";

import Accordion from "./components/accordion";
import Appbar from "./components/appbar";
import Avatar from "./components/avatar";
import Alert from "./components/alert";
import Autocomplete from "./components/autocomplete";
import Button from "./components/button";
import Breadcrumbs from "./components/breadcrumbs";
import Card from "./components/card";
import Dialog from "./components/dialog";
import TextField from "./components/textfield";
import Menu from "./components/menu";
import Lists from "./components/list";
import Link from "./components/link";
import Table from "./components/table";
import Tabs from "./components/tabs";
import Typography from "./components/typography";
import ToggleButton from "./components/toggle-button";
import Switch from "./components/switch";
import Stack from "./components/stack";
import SvgIcon from "./components/svg-icon";
import Pagination from "./components/pagination";
import Rating from "./components/rating";

export function componentsOverrides(theme: Theme) {
  return merge(
    Accordion(theme),
    Appbar(theme),
    Avatar(theme),
    Alert(theme),
    Autocomplete(theme),
    Button(theme),
    Breadcrumbs(theme),
    Card(theme),
    Dialog(theme),
    Menu(theme),
    Lists(theme),
    Link(theme),
    Table(theme),
    TextField(theme),
    Tabs(theme),
    Typography(theme),
    ToggleButton(theme),
    Rating(theme),
    Stack(theme),
    Switch(theme),
    SvgIcon(theme),
    Pagination(theme)
  );
}
