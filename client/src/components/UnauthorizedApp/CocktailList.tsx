import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import getCocktails from "../../api/getCocktails";

const CocktailList = (props: any) => {
  const [type, setType] = useState<string>(props.location.state.type);
  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState<string>("");

  /**
   * * GET cocktails by type
   */
  useEffect(() => {
    console.log(type);
    if (type) {
      getCocktails(type);
    }
  });

  const handleOnClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const id = e.currentTarget.alt;
    setId(id);
    setRedirect(!redirect);
  };

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: `/cocktail/${id}`,
          state: { id: id }
        }}
      />
    );
  // else if (data)
  //   return (
  //     <StyledList>
  //       <h2>{type}</h2>
  //       <div className="container">
  //         {data.map(cocktail => {
  //           return (
  //             <div
  //               className="cocktail-category"
  //               key={cocktail.id}
  //               onClick={handleOnClick}
  //             >
  //               <img src={cocktail.photo_url} alt={cocktail.id} />
  //               <p>{cocktail.name}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </StyledList>
  //   );

  return <div>loading..</div>;
};

export default CocktailList;
