import { ReactChild, ReactFragment, ReactPortal } from "react";

export default function Root(props: { name: boolean | ReactChild | ReactFragment | ReactPortal; }) {
  return <section>{props.name} is mounted!</section>;
}
