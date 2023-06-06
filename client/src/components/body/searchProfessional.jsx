import React from "react";

const SearchProfessional = () => {
    return (
        <section>
            <form>
                <label>
                    Encontre seu terapeuta:
                    <input type="text" name="searchProfessional" placeholder="Selecione a especialidade" />
                </label>
                <input type="submit" value="Pesquisar" />
                </form>
        </section>
    )
}

export default SearchProfessional