import { Fragment } from "react";
import "./TableList.css";

function TableList({ items }: { items: any[] }) {
  return (
    <table>
      <tr>
        <td>Nombre</td>
        <td>Bramch</td>
        <td>Descripción</td>
        <td>Fecha de actualización</td>
        <td>Fecha de creación</td>
      </tr>
           {items?.length > 0 && items.map((item) => <tr>
            <td>{item.name}</td>
            <td>{item.default_branch}</td>
            <td>{item.description}</td>
            <td>{item.created_at}</td>
            <td>{item.updated_at}</td>
          </tr>)}
          {(items ?? [])?.length === 0 && <tr><td colSpan={5}>Sin información</td></tr>}
      
    </table>
  );
}

export default TableList;
