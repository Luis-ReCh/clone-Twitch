import CategoryCards from "./componets/CategoryCards";
import UsersChannel from "./componets/UsersChannel";

import { categories } from "./data/categories";
import { users } from "./data/users";

export default function App() {
  return (
    <>
      <main>
        <div>
          <h3>CANALES RECOMENDADOS</h3>
          <section>
            {/* <div className="channels">
            <div>
              <img
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/lvpes-profile_image-b9a288b926641fe4-70x70.png"
                alt=""
                className="channelsImg"
              />
            </div>
            <div>
              <h5>ibai</h5>
              <p className="conversation">Conversando</p>
            </div>
            <div>
              <div className="Online">
                <span className="onlineRed">🔴</span>
                <p>58.3k</p>
              </div>
            </div>
          </div> */}
            {users.map((user, index) => {
              return (
                <UsersChannel
                  key={`category-card-${index}`}
                  name={user.name}
                  title={user.title}
                  image={user.image}
                  viewers={user.viewers}
                />
              );
            })}
          </section>
        </div>

        <div>
          <p className="h1">
            <span>Categorías</span> que podrían gustarte
          </p>
          <hr />

          <div className="container">
            {categories.map((category, index) => {
              return (
                <CategoryCards
                  key={`category-card-${index}`}
                  title={category.title}
                  url={category.url}
                  spectator={category.spectator}
                  isNew={category.isNew}
                  tag={category.tag}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
