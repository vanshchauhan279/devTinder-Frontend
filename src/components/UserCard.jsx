const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, gender, skills} = user;
  return (
      <div className="card bg-base-100 w-92 rounded-3xl  shadow-sm mt-16 bg-slate-300 p-10 ">
        <figure>
          <img
            src={photoUrl}
            alt="user photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName+" "+lastName}</h2>
          <p>
            {skills.join(" ")}
          </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
  );
};

export default UserCard;
