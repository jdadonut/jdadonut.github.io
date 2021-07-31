function Divider(props) {
  let fromTop = props.fromTop || '50px';
  return (
    <div
      className={'divider'}
      style={{
        position: 'absolute',
        left: '0',
        right: '0',
        width: '100vw',
        top: fromTop,
        height: '4px',
        background: 'white'
      }}
    />
  );
}
export default Divider;
