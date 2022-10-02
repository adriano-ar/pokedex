/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import PokemonDetail from "../Components/PokemonDetail";

describe("PokemonDetail", () => {
    test("doesn't show when there's no current pokemon", async () => {
        render(
            <PokemonDetail
                currentPokemon={null}
                showingPokemonDetail={false}
                hidePokemonDetail={Function}
            />
        );
        expect(screen.getByTestId("pokemonDetailView").className).toContain("");
    });
    test("shows up when there's currently pokemon", async () => {
        render(
            <PokemonDetail
                currentPokemon={null}
                showingPokemonDetail={true}
                hidePokemonDetail={Function}
            />
        );
        expect(screen.getByTestId("pokemonDetailView").className).toContain(
            "show"
        );
    });
});
