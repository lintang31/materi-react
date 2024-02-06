function Intro(props) {
  return (
    <>
      <p>
        <strong>Nama:</strong> {props.nama}
      </p>
      <p>
        <strong>Sekolah:</strong> {props.sekolah}
      </p>
      <p>
        <strong>Kelas:</strong> {props.kelas}
      </p>
    </>
  );
}
export default Intro;
