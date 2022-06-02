import useFetch from "../../../core/constants/use-fetch";
import TableList from "../../../shared/components/TableList/TableList";

export function CourseList() {
  const { data, loading, error } = useFetch(
    "https://api.github.com/users/atdetquizan/repos"
  );

  return (
    <div>
      {loading}
      <ul>
        <TableList items={data}/>
      </ul>
    </div>
  );
}
