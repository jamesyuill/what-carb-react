export default function LoadingModal() {
  return (
    <div className="loading-modal">
      loading deliciousness...
      <div className="loading-gif">
        <img
          src="./loading.gif"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            paddingTop: '10%',
            width: '3rem',
          }}
        />
      </div>
    </div>
  );
}
