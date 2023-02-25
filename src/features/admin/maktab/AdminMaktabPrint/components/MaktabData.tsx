interface IMaktabDataProps {
  label: string | undefined;
  value: string | undefined;
}

function MaktabData(props: IMaktabDataProps) {
  const { label, value } = props;

  return (
    <>
      <td className="pl-6 font-medium">{label}</td>
      <td className="pr-6 text-gray-800">: {value === "0" ? "-" : value}</td>
    </>
  );
}

export default MaktabData;
