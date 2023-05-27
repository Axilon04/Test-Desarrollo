import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

import json from "../../data/orders.json";

function OrderCard({ info }: any) {
  const dateObject = new Date(info.date);
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateObject);
  const formattedValue = `$${info.value.toLocaleString("es-ES")}`;

  return (
    <Card key={info.id} className="Card">
      <CardHeader className="card-header">
        <CardTitle className="card-title">Pedido # {info.id}</CardTitle>
        <CardDescription className="card-description">
          {info.address} / {formattedDate}
        </CardDescription>
        <Separator className="card-separator"/>
      </CardHeader>
      <CardContent className="card-content">
        <p>{formattedValue}</p>
      </CardContent>
    </Card>
  );
}

function Received() {
  return (
    <section className="container card all">
      {json.map((info) => (
        <OrderCard key={info.id} info={info} />
      ))}
    </section>
  );
}

function Ontheway() {
  return (
    <section className="container all">
      
    </section>
  )
}

function Delivered(){
  return (
    <section className="container all">
    </section>
  )
}

function Orders() {
  const [menu, setMenu] = useState("Recibido");
  const btns = ["Recibido", "En camino", "Entregado"];

  return (
    <>
      <section className="container all">
        <h1>Historial de pedidos</h1>
        <section className="container btn">
          {btns.map((btn, index) => (
            <Button
              key={index}
              onClick={() => setMenu(btn)}
              className={`option ${menu === btn ? "Active" : "Disabled"}`}
            >
              {btn}
            </Button>
          ))}
        </section>
      </section>
      {menu === btns[0] && <Received />}
      {menu === btns[1] && <Ontheway />}
      {menu === btns[2] && <Delivered />}
    </>
  );
}

export default Orders;
