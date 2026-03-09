import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PlayerOpponent
 *
 */
export type PlayerOpponentModel = runtime.Types.Result.DefaultSelection<Prisma.$PlayerOpponentPayload>;
export type AggregatePlayerOpponent = {
    _count: PlayerOpponentCountAggregateOutputType | null;
    _avg: PlayerOpponentAvgAggregateOutputType | null;
    _sum: PlayerOpponentSumAggregateOutputType | null;
    _min: PlayerOpponentMinAggregateOutputType | null;
    _max: PlayerOpponentMaxAggregateOutputType | null;
};
export type PlayerOpponentAvgAggregateOutputType = {
    roundNumber: number | null;
};
export type PlayerOpponentSumAggregateOutputType = {
    roundNumber: number | null;
};
export type PlayerOpponentMinAggregateOutputType = {
    id: string | null;
    playerId1: string | null;
    playerId2: string | null;
    roundNumber: number | null;
    tournamentId: string | null;
};
export type PlayerOpponentMaxAggregateOutputType = {
    id: string | null;
    playerId1: string | null;
    playerId2: string | null;
    roundNumber: number | null;
    tournamentId: string | null;
};
export type PlayerOpponentCountAggregateOutputType = {
    id: number;
    playerId1: number;
    playerId2: number;
    roundNumber: number;
    tournamentId: number;
    _all: number;
};
export type PlayerOpponentAvgAggregateInputType = {
    roundNumber?: true;
};
export type PlayerOpponentSumAggregateInputType = {
    roundNumber?: true;
};
export type PlayerOpponentMinAggregateInputType = {
    id?: true;
    playerId1?: true;
    playerId2?: true;
    roundNumber?: true;
    tournamentId?: true;
};
export type PlayerOpponentMaxAggregateInputType = {
    id?: true;
    playerId1?: true;
    playerId2?: true;
    roundNumber?: true;
    tournamentId?: true;
};
export type PlayerOpponentCountAggregateInputType = {
    id?: true;
    playerId1?: true;
    playerId2?: true;
    roundNumber?: true;
    tournamentId?: true;
    _all?: true;
};
export type PlayerOpponentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerOpponent to aggregate.
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerOpponents to fetch.
     */
    orderBy?: Prisma.PlayerOpponentOrderByWithRelationInput | Prisma.PlayerOpponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PlayerOpponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerOpponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerOpponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PlayerOpponents
    **/
    _count?: true | PlayerOpponentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PlayerOpponentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PlayerOpponentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PlayerOpponentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PlayerOpponentMaxAggregateInputType;
};
export type GetPlayerOpponentAggregateType<T extends PlayerOpponentAggregateArgs> = {
    [P in keyof T & keyof AggregatePlayerOpponent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlayerOpponent[P]> : Prisma.GetScalarType<T[P], AggregatePlayerOpponent[P]>;
};
export type PlayerOpponentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlayerOpponentWhereInput;
    orderBy?: Prisma.PlayerOpponentOrderByWithAggregationInput | Prisma.PlayerOpponentOrderByWithAggregationInput[];
    by: Prisma.PlayerOpponentScalarFieldEnum[] | Prisma.PlayerOpponentScalarFieldEnum;
    having?: Prisma.PlayerOpponentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlayerOpponentCountAggregateInputType | true;
    _avg?: PlayerOpponentAvgAggregateInputType;
    _sum?: PlayerOpponentSumAggregateInputType;
    _min?: PlayerOpponentMinAggregateInputType;
    _max?: PlayerOpponentMaxAggregateInputType;
};
export type PlayerOpponentGroupByOutputType = {
    id: string;
    playerId1: string;
    playerId2: string;
    roundNumber: number;
    tournamentId: string;
    _count: PlayerOpponentCountAggregateOutputType | null;
    _avg: PlayerOpponentAvgAggregateOutputType | null;
    _sum: PlayerOpponentSumAggregateOutputType | null;
    _min: PlayerOpponentMinAggregateOutputType | null;
    _max: PlayerOpponentMaxAggregateOutputType | null;
};
type GetPlayerOpponentGroupByPayload<T extends PlayerOpponentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlayerOpponentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlayerOpponentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlayerOpponentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlayerOpponentGroupByOutputType[P]>;
}>>;
export type PlayerOpponentWhereInput = {
    AND?: Prisma.PlayerOpponentWhereInput | Prisma.PlayerOpponentWhereInput[];
    OR?: Prisma.PlayerOpponentWhereInput[];
    NOT?: Prisma.PlayerOpponentWhereInput | Prisma.PlayerOpponentWhereInput[];
    id?: Prisma.StringFilter<"PlayerOpponent"> | string;
    playerId1?: Prisma.StringFilter<"PlayerOpponent"> | string;
    playerId2?: Prisma.StringFilter<"PlayerOpponent"> | string;
    roundNumber?: Prisma.IntFilter<"PlayerOpponent"> | number;
    tournamentId?: Prisma.StringFilter<"PlayerOpponent"> | string;
    player1?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    player2?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
};
export type PlayerOpponentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    playerId1?: Prisma.SortOrder;
    playerId2?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    player1?: Prisma.PlayerOrderByWithRelationInput;
    player2?: Prisma.PlayerOrderByWithRelationInput;
};
export type PlayerOpponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    playerId1_playerId2_tournamentId?: Prisma.PlayerOpponentPlayerId1PlayerId2TournamentIdCompoundUniqueInput;
    AND?: Prisma.PlayerOpponentWhereInput | Prisma.PlayerOpponentWhereInput[];
    OR?: Prisma.PlayerOpponentWhereInput[];
    NOT?: Prisma.PlayerOpponentWhereInput | Prisma.PlayerOpponentWhereInput[];
    playerId1?: Prisma.StringFilter<"PlayerOpponent"> | string;
    playerId2?: Prisma.StringFilter<"PlayerOpponent"> | string;
    roundNumber?: Prisma.IntFilter<"PlayerOpponent"> | number;
    tournamentId?: Prisma.StringFilter<"PlayerOpponent"> | string;
    player1?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
    player2?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
}, "id" | "playerId1_playerId2_tournamentId">;
export type PlayerOpponentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    playerId1?: Prisma.SortOrder;
    playerId2?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    _count?: Prisma.PlayerOpponentCountOrderByAggregateInput;
    _avg?: Prisma.PlayerOpponentAvgOrderByAggregateInput;
    _max?: Prisma.PlayerOpponentMaxOrderByAggregateInput;
    _min?: Prisma.PlayerOpponentMinOrderByAggregateInput;
    _sum?: Prisma.PlayerOpponentSumOrderByAggregateInput;
};
export type PlayerOpponentScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlayerOpponentScalarWhereWithAggregatesInput | Prisma.PlayerOpponentScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlayerOpponentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlayerOpponentScalarWhereWithAggregatesInput | Prisma.PlayerOpponentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PlayerOpponent"> | string;
    playerId1?: Prisma.StringWithAggregatesFilter<"PlayerOpponent"> | string;
    playerId2?: Prisma.StringWithAggregatesFilter<"PlayerOpponent"> | string;
    roundNumber?: Prisma.IntWithAggregatesFilter<"PlayerOpponent"> | number;
    tournamentId?: Prisma.StringWithAggregatesFilter<"PlayerOpponent"> | string;
};
export type PlayerOpponentCreateInput = {
    id?: string;
    roundNumber: number;
    tournamentId: string;
    player1: Prisma.PlayerCreateNestedOneWithoutOpponentsAsP1Input;
    player2: Prisma.PlayerCreateNestedOneWithoutOpponentsAsP2Input;
};
export type PlayerOpponentUncheckedCreateInput = {
    id?: string;
    playerId1: string;
    playerId2: string;
    roundNumber: number;
    tournamentId: string;
};
export type PlayerOpponentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    player1?: Prisma.PlayerUpdateOneRequiredWithoutOpponentsAsP1NestedInput;
    player2?: Prisma.PlayerUpdateOneRequiredWithoutOpponentsAsP2NestedInput;
};
export type PlayerOpponentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId1?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId2?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentCreateManyInput = {
    id?: string;
    playerId1: string;
    playerId2: string;
    roundNumber: number;
    tournamentId: string;
};
export type PlayerOpponentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId1?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId2?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentListRelationFilter = {
    every?: Prisma.PlayerOpponentWhereInput;
    some?: Prisma.PlayerOpponentWhereInput;
    none?: Prisma.PlayerOpponentWhereInput;
};
export type PlayerOpponentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PlayerOpponentPlayerId1PlayerId2TournamentIdCompoundUniqueInput = {
    playerId1: string;
    playerId2: string;
    tournamentId: string;
};
export type PlayerOpponentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    playerId1?: Prisma.SortOrder;
    playerId2?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type PlayerOpponentAvgOrderByAggregateInput = {
    roundNumber?: Prisma.SortOrder;
};
export type PlayerOpponentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    playerId1?: Prisma.SortOrder;
    playerId2?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type PlayerOpponentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    playerId1?: Prisma.SortOrder;
    playerId2?: Prisma.SortOrder;
    roundNumber?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type PlayerOpponentSumOrderByAggregateInput = {
    roundNumber?: Prisma.SortOrder;
};
export type PlayerOpponentCreateNestedManyWithoutPlayer1Input = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input> | Prisma.PlayerOpponentCreateWithoutPlayer1Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer1InputEnvelope;
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
};
export type PlayerOpponentCreateNestedManyWithoutPlayer2Input = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input> | Prisma.PlayerOpponentCreateWithoutPlayer2Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer2InputEnvelope;
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
};
export type PlayerOpponentUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input> | Prisma.PlayerOpponentCreateWithoutPlayer1Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer1InputEnvelope;
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
};
export type PlayerOpponentUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input> | Prisma.PlayerOpponentCreateWithoutPlayer2Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer2InputEnvelope;
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
};
export type PlayerOpponentUpdateManyWithoutPlayer1NestedInput = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input> | Prisma.PlayerOpponentCreateWithoutPlayer1Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input[];
    upsert?: Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer1Input | Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer1Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer1InputEnvelope;
    set?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    disconnect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    delete?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    update?: Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer1Input | Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer1Input[];
    updateMany?: Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer1Input | Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer1Input[];
    deleteMany?: Prisma.PlayerOpponentScalarWhereInput | Prisma.PlayerOpponentScalarWhereInput[];
};
export type PlayerOpponentUpdateManyWithoutPlayer2NestedInput = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input> | Prisma.PlayerOpponentCreateWithoutPlayer2Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input[];
    upsert?: Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer2Input | Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer2Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer2InputEnvelope;
    set?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    disconnect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    delete?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    update?: Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer2Input | Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer2Input[];
    updateMany?: Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer2Input | Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer2Input[];
    deleteMany?: Prisma.PlayerOpponentScalarWhereInput | Prisma.PlayerOpponentScalarWhereInput[];
};
export type PlayerOpponentUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input> | Prisma.PlayerOpponentCreateWithoutPlayer1Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer1Input[];
    upsert?: Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer1Input | Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer1Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer1InputEnvelope;
    set?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    disconnect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    delete?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    update?: Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer1Input | Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer1Input[];
    updateMany?: Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer1Input | Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer1Input[];
    deleteMany?: Prisma.PlayerOpponentScalarWhereInput | Prisma.PlayerOpponentScalarWhereInput[];
};
export type PlayerOpponentUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input> | Prisma.PlayerOpponentCreateWithoutPlayer2Input[] | Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input[];
    connectOrCreate?: Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input | Prisma.PlayerOpponentCreateOrConnectWithoutPlayer2Input[];
    upsert?: Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer2Input | Prisma.PlayerOpponentUpsertWithWhereUniqueWithoutPlayer2Input[];
    createMany?: Prisma.PlayerOpponentCreateManyPlayer2InputEnvelope;
    set?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    disconnect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    delete?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    connect?: Prisma.PlayerOpponentWhereUniqueInput | Prisma.PlayerOpponentWhereUniqueInput[];
    update?: Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer2Input | Prisma.PlayerOpponentUpdateWithWhereUniqueWithoutPlayer2Input[];
    updateMany?: Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer2Input | Prisma.PlayerOpponentUpdateManyWithWhereWithoutPlayer2Input[];
    deleteMany?: Prisma.PlayerOpponentScalarWhereInput | Prisma.PlayerOpponentScalarWhereInput[];
};
export type PlayerOpponentCreateWithoutPlayer1Input = {
    id?: string;
    roundNumber: number;
    tournamentId: string;
    player2: Prisma.PlayerCreateNestedOneWithoutOpponentsAsP2Input;
};
export type PlayerOpponentUncheckedCreateWithoutPlayer1Input = {
    id?: string;
    playerId2: string;
    roundNumber: number;
    tournamentId: string;
};
export type PlayerOpponentCreateOrConnectWithoutPlayer1Input = {
    where: Prisma.PlayerOpponentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input>;
};
export type PlayerOpponentCreateManyPlayer1InputEnvelope = {
    data: Prisma.PlayerOpponentCreateManyPlayer1Input | Prisma.PlayerOpponentCreateManyPlayer1Input[];
    skipDuplicates?: boolean;
};
export type PlayerOpponentCreateWithoutPlayer2Input = {
    id?: string;
    roundNumber: number;
    tournamentId: string;
    player1: Prisma.PlayerCreateNestedOneWithoutOpponentsAsP1Input;
};
export type PlayerOpponentUncheckedCreateWithoutPlayer2Input = {
    id?: string;
    playerId1: string;
    roundNumber: number;
    tournamentId: string;
};
export type PlayerOpponentCreateOrConnectWithoutPlayer2Input = {
    where: Prisma.PlayerOpponentWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input>;
};
export type PlayerOpponentCreateManyPlayer2InputEnvelope = {
    data: Prisma.PlayerOpponentCreateManyPlayer2Input | Prisma.PlayerOpponentCreateManyPlayer2Input[];
    skipDuplicates?: boolean;
};
export type PlayerOpponentUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: Prisma.PlayerOpponentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayerOpponentUpdateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedUpdateWithoutPlayer1Input>;
    create: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer1Input>;
};
export type PlayerOpponentUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: Prisma.PlayerOpponentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateWithoutPlayer1Input, Prisma.PlayerOpponentUncheckedUpdateWithoutPlayer1Input>;
};
export type PlayerOpponentUpdateManyWithWhereWithoutPlayer1Input = {
    where: Prisma.PlayerOpponentScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateManyMutationInput, Prisma.PlayerOpponentUncheckedUpdateManyWithoutPlayer1Input>;
};
export type PlayerOpponentScalarWhereInput = {
    AND?: Prisma.PlayerOpponentScalarWhereInput | Prisma.PlayerOpponentScalarWhereInput[];
    OR?: Prisma.PlayerOpponentScalarWhereInput[];
    NOT?: Prisma.PlayerOpponentScalarWhereInput | Prisma.PlayerOpponentScalarWhereInput[];
    id?: Prisma.StringFilter<"PlayerOpponent"> | string;
    playerId1?: Prisma.StringFilter<"PlayerOpponent"> | string;
    playerId2?: Prisma.StringFilter<"PlayerOpponent"> | string;
    roundNumber?: Prisma.IntFilter<"PlayerOpponent"> | number;
    tournamentId?: Prisma.StringFilter<"PlayerOpponent"> | string;
};
export type PlayerOpponentUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: Prisma.PlayerOpponentWhereUniqueInput;
    update: Prisma.XOR<Prisma.PlayerOpponentUpdateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedUpdateWithoutPlayer2Input>;
    create: Prisma.XOR<Prisma.PlayerOpponentCreateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedCreateWithoutPlayer2Input>;
};
export type PlayerOpponentUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: Prisma.PlayerOpponentWhereUniqueInput;
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateWithoutPlayer2Input, Prisma.PlayerOpponentUncheckedUpdateWithoutPlayer2Input>;
};
export type PlayerOpponentUpdateManyWithWhereWithoutPlayer2Input = {
    where: Prisma.PlayerOpponentScalarWhereInput;
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateManyMutationInput, Prisma.PlayerOpponentUncheckedUpdateManyWithoutPlayer2Input>;
};
export type PlayerOpponentCreateManyPlayer1Input = {
    id?: string;
    playerId2: string;
    roundNumber: number;
    tournamentId: string;
};
export type PlayerOpponentCreateManyPlayer2Input = {
    id?: string;
    playerId1: string;
    roundNumber: number;
    tournamentId: string;
};
export type PlayerOpponentUpdateWithoutPlayer1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    player2?: Prisma.PlayerUpdateOneRequiredWithoutOpponentsAsP2NestedInput;
};
export type PlayerOpponentUncheckedUpdateWithoutPlayer1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId2?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentUncheckedUpdateManyWithoutPlayer1Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId2?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentUpdateWithoutPlayer2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
    player1?: Prisma.PlayerUpdateOneRequiredWithoutOpponentsAsP1NestedInput;
};
export type PlayerOpponentUncheckedUpdateWithoutPlayer2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId1?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentUncheckedUpdateManyWithoutPlayer2Input = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId1?: Prisma.StringFieldUpdateOperationsInput | string;
    roundNumber?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlayerOpponentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    playerId1?: boolean;
    playerId2?: boolean;
    roundNumber?: boolean;
    tournamentId?: boolean;
    player1?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    player2?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playerOpponent"]>;
export type PlayerOpponentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    playerId1?: boolean;
    playerId2?: boolean;
    roundNumber?: boolean;
    tournamentId?: boolean;
    player1?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    player2?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playerOpponent"]>;
export type PlayerOpponentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    playerId1?: boolean;
    playerId2?: boolean;
    roundNumber?: boolean;
    tournamentId?: boolean;
    player1?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    player2?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["playerOpponent"]>;
export type PlayerOpponentSelectScalar = {
    id?: boolean;
    playerId1?: boolean;
    playerId2?: boolean;
    roundNumber?: boolean;
    tournamentId?: boolean;
};
export type PlayerOpponentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "playerId1" | "playerId2" | "roundNumber" | "tournamentId", ExtArgs["result"]["playerOpponent"]>;
export type PlayerOpponentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player1?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    player2?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type PlayerOpponentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player1?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    player2?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type PlayerOpponentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    player1?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
    player2?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type $PlayerOpponentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlayerOpponent";
    objects: {
        player1: Prisma.$PlayerPayload<ExtArgs>;
        player2: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        playerId1: string;
        playerId2: string;
        roundNumber: number;
        tournamentId: string;
    }, ExtArgs["result"]["playerOpponent"]>;
    composites: {};
};
export type PlayerOpponentGetPayload<S extends boolean | null | undefined | PlayerOpponentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload, S>;
export type PlayerOpponentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlayerOpponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlayerOpponentCountAggregateInputType | true;
};
export interface PlayerOpponentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlayerOpponent'];
        meta: {
            name: 'PlayerOpponent';
        };
    };
    /**
     * Find zero or one PlayerOpponent that matches the filter.
     * @param {PlayerOpponentFindUniqueArgs} args - Arguments to find a PlayerOpponent
     * @example
     * // Get one PlayerOpponent
     * const playerOpponent = await prisma.playerOpponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerOpponentFindUniqueArgs>(args: Prisma.SelectSubset<T, PlayerOpponentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PlayerOpponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerOpponentFindUniqueOrThrowArgs} args - Arguments to find a PlayerOpponent
     * @example
     * // Get one PlayerOpponent
     * const playerOpponent = await prisma.playerOpponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerOpponentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlayerOpponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayerOpponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentFindFirstArgs} args - Arguments to find a PlayerOpponent
     * @example
     * // Get one PlayerOpponent
     * const playerOpponent = await prisma.playerOpponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerOpponentFindFirstArgs>(args?: Prisma.SelectSubset<T, PlayerOpponentFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PlayerOpponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentFindFirstOrThrowArgs} args - Arguments to find a PlayerOpponent
     * @example
     * // Get one PlayerOpponent
     * const playerOpponent = await prisma.playerOpponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerOpponentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlayerOpponentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PlayerOpponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerOpponents
     * const playerOpponents = await prisma.playerOpponent.findMany()
     *
     * // Get first 10 PlayerOpponents
     * const playerOpponents = await prisma.playerOpponent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const playerOpponentWithIdOnly = await prisma.playerOpponent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlayerOpponentFindManyArgs>(args?: Prisma.SelectSubset<T, PlayerOpponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PlayerOpponent.
     * @param {PlayerOpponentCreateArgs} args - Arguments to create a PlayerOpponent.
     * @example
     * // Create one PlayerOpponent
     * const PlayerOpponent = await prisma.playerOpponent.create({
     *   data: {
     *     // ... data to create a PlayerOpponent
     *   }
     * })
     *
     */
    create<T extends PlayerOpponentCreateArgs>(args: Prisma.SelectSubset<T, PlayerOpponentCreateArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PlayerOpponents.
     * @param {PlayerOpponentCreateManyArgs} args - Arguments to create many PlayerOpponents.
     * @example
     * // Create many PlayerOpponents
     * const playerOpponent = await prisma.playerOpponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlayerOpponentCreateManyArgs>(args?: Prisma.SelectSubset<T, PlayerOpponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PlayerOpponents and returns the data saved in the database.
     * @param {PlayerOpponentCreateManyAndReturnArgs} args - Arguments to create many PlayerOpponents.
     * @example
     * // Create many PlayerOpponents
     * const playerOpponent = await prisma.playerOpponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PlayerOpponents and only return the `id`
     * const playerOpponentWithIdOnly = await prisma.playerOpponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlayerOpponentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlayerOpponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PlayerOpponent.
     * @param {PlayerOpponentDeleteArgs} args - Arguments to delete one PlayerOpponent.
     * @example
     * // Delete one PlayerOpponent
     * const PlayerOpponent = await prisma.playerOpponent.delete({
     *   where: {
     *     // ... filter to delete one PlayerOpponent
     *   }
     * })
     *
     */
    delete<T extends PlayerOpponentDeleteArgs>(args: Prisma.SelectSubset<T, PlayerOpponentDeleteArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PlayerOpponent.
     * @param {PlayerOpponentUpdateArgs} args - Arguments to update one PlayerOpponent.
     * @example
     * // Update one PlayerOpponent
     * const playerOpponent = await prisma.playerOpponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlayerOpponentUpdateArgs>(args: Prisma.SelectSubset<T, PlayerOpponentUpdateArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PlayerOpponents.
     * @param {PlayerOpponentDeleteManyArgs} args - Arguments to filter PlayerOpponents to delete.
     * @example
     * // Delete a few PlayerOpponents
     * const { count } = await prisma.playerOpponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlayerOpponentDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlayerOpponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayerOpponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerOpponents
     * const playerOpponent = await prisma.playerOpponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlayerOpponentUpdateManyArgs>(args: Prisma.SelectSubset<T, PlayerOpponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PlayerOpponents and returns the data updated in the database.
     * @param {PlayerOpponentUpdateManyAndReturnArgs} args - Arguments to update many PlayerOpponents.
     * @example
     * // Update many PlayerOpponents
     * const playerOpponent = await prisma.playerOpponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PlayerOpponents and only return the `id`
     * const playerOpponentWithIdOnly = await prisma.playerOpponent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlayerOpponentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlayerOpponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PlayerOpponent.
     * @param {PlayerOpponentUpsertArgs} args - Arguments to update or create a PlayerOpponent.
     * @example
     * // Update or create a PlayerOpponent
     * const playerOpponent = await prisma.playerOpponent.upsert({
     *   create: {
     *     // ... data to create a PlayerOpponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerOpponent we want to update
     *   }
     * })
     */
    upsert<T extends PlayerOpponentUpsertArgs>(args: Prisma.SelectSubset<T, PlayerOpponentUpsertArgs<ExtArgs>>): Prisma.Prisma__PlayerOpponentClient<runtime.Types.Result.GetResult<Prisma.$PlayerOpponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PlayerOpponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentCountArgs} args - Arguments to filter PlayerOpponents to count.
     * @example
     * // Count the number of PlayerOpponents
     * const count = await prisma.playerOpponent.count({
     *   where: {
     *     // ... the filter for the PlayerOpponents we want to count
     *   }
     * })
    **/
    count<T extends PlayerOpponentCountArgs>(args?: Prisma.Subset<T, PlayerOpponentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlayerOpponentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PlayerOpponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerOpponentAggregateArgs>(args: Prisma.Subset<T, PlayerOpponentAggregateArgs>): Prisma.PrismaPromise<GetPlayerOpponentAggregateType<T>>;
    /**
     * Group by PlayerOpponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerOpponentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends PlayerOpponentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlayerOpponentGroupByArgs['orderBy'];
    } : {
        orderBy?: PlayerOpponentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlayerOpponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerOpponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PlayerOpponent model
     */
    readonly fields: PlayerOpponentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PlayerOpponent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PlayerOpponentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    player1<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    player2<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the PlayerOpponent model
 */
export interface PlayerOpponentFieldRefs {
    readonly id: Prisma.FieldRef<"PlayerOpponent", 'String'>;
    readonly playerId1: Prisma.FieldRef<"PlayerOpponent", 'String'>;
    readonly playerId2: Prisma.FieldRef<"PlayerOpponent", 'String'>;
    readonly roundNumber: Prisma.FieldRef<"PlayerOpponent", 'Int'>;
    readonly tournamentId: Prisma.FieldRef<"PlayerOpponent", 'String'>;
}
/**
 * PlayerOpponent findUnique
 */
export type PlayerOpponentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * Filter, which PlayerOpponent to fetch.
     */
    where: Prisma.PlayerOpponentWhereUniqueInput;
};
/**
 * PlayerOpponent findUniqueOrThrow
 */
export type PlayerOpponentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * Filter, which PlayerOpponent to fetch.
     */
    where: Prisma.PlayerOpponentWhereUniqueInput;
};
/**
 * PlayerOpponent findFirst
 */
export type PlayerOpponentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * Filter, which PlayerOpponent to fetch.
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerOpponents to fetch.
     */
    orderBy?: Prisma.PlayerOpponentOrderByWithRelationInput | Prisma.PlayerOpponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayerOpponents.
     */
    cursor?: Prisma.PlayerOpponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerOpponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerOpponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayerOpponents.
     */
    distinct?: Prisma.PlayerOpponentScalarFieldEnum | Prisma.PlayerOpponentScalarFieldEnum[];
};
/**
 * PlayerOpponent findFirstOrThrow
 */
export type PlayerOpponentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * Filter, which PlayerOpponent to fetch.
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerOpponents to fetch.
     */
    orderBy?: Prisma.PlayerOpponentOrderByWithRelationInput | Prisma.PlayerOpponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlayerOpponents.
     */
    cursor?: Prisma.PlayerOpponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerOpponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerOpponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlayerOpponents.
     */
    distinct?: Prisma.PlayerOpponentScalarFieldEnum | Prisma.PlayerOpponentScalarFieldEnum[];
};
/**
 * PlayerOpponent findMany
 */
export type PlayerOpponentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * Filter, which PlayerOpponents to fetch.
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlayerOpponents to fetch.
     */
    orderBy?: Prisma.PlayerOpponentOrderByWithRelationInput | Prisma.PlayerOpponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PlayerOpponents.
     */
    cursor?: Prisma.PlayerOpponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlayerOpponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlayerOpponents.
     */
    skip?: number;
    distinct?: Prisma.PlayerOpponentScalarFieldEnum | Prisma.PlayerOpponentScalarFieldEnum[];
};
/**
 * PlayerOpponent create
 */
export type PlayerOpponentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * The data needed to create a PlayerOpponent.
     */
    data: Prisma.XOR<Prisma.PlayerOpponentCreateInput, Prisma.PlayerOpponentUncheckedCreateInput>;
};
/**
 * PlayerOpponent createMany
 */
export type PlayerOpponentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerOpponents.
     */
    data: Prisma.PlayerOpponentCreateManyInput | Prisma.PlayerOpponentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PlayerOpponent createManyAndReturn
 */
export type PlayerOpponentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * The data used to create many PlayerOpponents.
     */
    data: Prisma.PlayerOpponentCreateManyInput | Prisma.PlayerOpponentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayerOpponent update
 */
export type PlayerOpponentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * The data needed to update a PlayerOpponent.
     */
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateInput, Prisma.PlayerOpponentUncheckedUpdateInput>;
    /**
     * Choose, which PlayerOpponent to update.
     */
    where: Prisma.PlayerOpponentWhereUniqueInput;
};
/**
 * PlayerOpponent updateMany
 */
export type PlayerOpponentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerOpponents.
     */
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateManyMutationInput, Prisma.PlayerOpponentUncheckedUpdateManyInput>;
    /**
     * Filter which PlayerOpponents to update
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * Limit how many PlayerOpponents to update.
     */
    limit?: number;
};
/**
 * PlayerOpponent updateManyAndReturn
 */
export type PlayerOpponentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * The data used to update PlayerOpponents.
     */
    data: Prisma.XOR<Prisma.PlayerOpponentUpdateManyMutationInput, Prisma.PlayerOpponentUncheckedUpdateManyInput>;
    /**
     * Filter which PlayerOpponents to update
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * Limit how many PlayerOpponents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PlayerOpponent upsert
 */
export type PlayerOpponentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * The filter to search for the PlayerOpponent to update in case it exists.
     */
    where: Prisma.PlayerOpponentWhereUniqueInput;
    /**
     * In case the PlayerOpponent found by the `where` argument doesn't exist, create a new PlayerOpponent with this data.
     */
    create: Prisma.XOR<Prisma.PlayerOpponentCreateInput, Prisma.PlayerOpponentUncheckedCreateInput>;
    /**
     * In case the PlayerOpponent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PlayerOpponentUpdateInput, Prisma.PlayerOpponentUncheckedUpdateInput>;
};
/**
 * PlayerOpponent delete
 */
export type PlayerOpponentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
    /**
     * Filter which PlayerOpponent to delete.
     */
    where: Prisma.PlayerOpponentWhereUniqueInput;
};
/**
 * PlayerOpponent deleteMany
 */
export type PlayerOpponentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerOpponents to delete
     */
    where?: Prisma.PlayerOpponentWhereInput;
    /**
     * Limit how many PlayerOpponents to delete.
     */
    limit?: number;
};
/**
 * PlayerOpponent without action
 */
export type PlayerOpponentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerOpponent
     */
    select?: Prisma.PlayerOpponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlayerOpponent
     */
    omit?: Prisma.PlayerOpponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PlayerOpponentInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=PlayerOpponent.d.ts.map