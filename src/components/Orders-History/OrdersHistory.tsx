import { useState, useMemo } from "react";
import { Button } from "../ui/button";
import ordersData from "../../data/orders.json";
import OrderCard, { OrderProps } from "./OrderCard";

function Orders() {
  const menuOptions = ["Recibido", "En camino", "Entregado"];
  const [selectedMenu, setSelectedMenu] = useState<string>(menuOptions[0]);

  const filteredOrders: OrderProps[] = useMemo(() => {
    const currentDate = new Date();
    switch (selectedMenu) {
      case menuOptions[0]:
        return ordersData.filter(({ date }: OrderProps) => {
          const orderDate = new Date(date);
          return orderDate > currentDate;
        });
      case menuOptions[1]:
        return ordersData.filter(({ date }: OrderProps) => {
          const orderDate = new Date(date);
          return (
            orderDate.getFullYear() === currentDate.getFullYear() &&
            orderDate.getMonth() === currentDate.getMonth() &&
            orderDate.getDate() === currentDate.getDate()
          );
        });
      case menuOptions[2]:
        return ordersData.filter(({ date }: OrderProps) => {
          const orderDate = new Date(date);
          return orderDate < currentDate;
        });
      default:
        return ordersData;
    }
  }, [selectedMenu]);

  return (
    <>
      <section className="container all">
        <h1>Historial de pedidos</h1>
        <section className="container btn">
          {menuOptions.map((button, index) => (
            <Button
              key={index}
              onClick={() => setSelectedMenu(button)}
              className={`option ${
                selectedMenu === button ? "active" : "disabled"
              }`}
            >
              {button}
            </Button>
          ))}
        </section>
      </section>
      <section className="container all card">
        {filteredOrders.map(({ id, address, date, value }) => (
          <OrderCard
            key={id}
            id={id}
            address={address}
            date={date}
            value={value}
          />
        ))}
      </section>
    </>
  );
}

export default Orders;