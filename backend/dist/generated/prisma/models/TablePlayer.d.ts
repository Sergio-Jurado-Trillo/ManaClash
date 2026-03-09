import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model TablePlayer
 *
 */
export type TablePlayerModel = runtime.Types.Result.DefaultSelection<Prisma.$TablePlayerPayload>;
export type AggregateTablePlayer = {
    _count: TablePlayerCountAggregateOutputType | null;
    _avg: TablePlayerAvgAggregateOutputType | null;
    _sum: TablePlayerSumAggregateOutputType | null;
    _min: TablePlayerMinAggregateOutputType | null;
    _max: TablePlayerMaxAggregateOutputType | null;
};
export type TablePlayerAvgAggregateOutputType = {
    position: number | null;
    pointsAwarded: runtime.Decimal | null;
    lives: number | null;
};
export type TablePlayerSumAggregateOutputType = {
    position: number | null;
    pointsAwarded: runtime.Decimal | null;
    lives: number | null;
};
export type TablePlayerMinAggregateOutputType = {
    id: string | null;
    position: number | null;
    pointsAwarded: runtime.Decimal | null;
    lives: number | null;
    tableId: string | null;
    playerId: string | null;
};
export type TablePlayerMaxAggregateOutputType = {
    id: string | null;
    position: number | null;
    pointsAwarded: runtime.Decimal | null;
    lives: number | null;
    tableId: string | null;
    playerId: string | null;
};
export type TablePlayerCountAggregateOutputType = {
    id: number;
    position: number;
    pointsAwarded: number;
    lives: number;
    tableId: number;
    playerId: number;
    _all: number;
};
export type TablePlayerAvgAggregateInputType = {
    position?: true;
    pointsAwarded?: true;
    lives?: true;
};
export type TablePlayerSumAggregateInputType = {
    position?: true;
    pointsAwarded?: true;
    lives?: true;
};
export type TablePlayerMinAggregateInputType = {
    id?: true;
    position?: true;
    pointsAwarded?: true;
    lives?: true;
    tableId?: true;
    playerId?: true;
};
export type TablePlayerMaxAggregateInputType = {
    id?: true;
    position?: true;
    pointsAwarded?: true;
    lives?: true;
    tableId?: true;
    playerId?: true;
};
export type TablePlayerCountAggregateInputType = {
    id?: true;
    position?: true;
    pointsAwarded?: true;
    lives?: true;
    tableId?: true;
    playerId?: true;
    _all?: true;
};
export type TablePlayerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TablePlayer to aggregate.
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TablePlayers to fetch.
     */
    orderBy?: Prisma.TablePlayerOrderByWithRelationInput | Prisma.TablePlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TablePlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TablePlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TablePlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TablePlayers
    **/
    _count?: true | TablePlayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TablePlayerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TablePlayerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TablePlayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TablePlayerMaxAggregateInputType;
};
export type GetTablePlayerAggregateType<T extends TablePlayerAggregateArgs> = {
    [P in keyof T & keyof AggregateTablePlayer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTablePlayer[P]> : Prisma.GetScalarType<T[P], AggregateTablePlayer[P]>;
};
export type TablePlayerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TablePlayerWhereInput;
    orderBy?: Prisma.TablePlayerOrderByWithAggregationInput | Prisma.TablePlayerOrderByWithAggregationInput[];
    by: Prisma.TablePlayerScalarFieldEnum[] | Prisma.TablePlayerScalarFieldEnum;
    having?: Prisma.TablePlayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TablePlayerCountAggregateInputType | true;
    _avg?: TablePlayerAvgAggregateInputType;
    _sum?: TablePlayerSumAggregateInputType;
    _min?: TablePlayerMinAggregateInputType;
    _max?: TablePlayerMaxAggregateInputType;
};
export type TablePlayerGroupByOutputType = {
    id: string;
    position: number | null;
    pointsAwarded: runtime.Decimal | null;
    lives: number | null;
    tableId: string;
    playerId: string;
    _count: TablePlayerCountAggregateOutputType | null;
    _avg: TablePlayerAvgAggregateOutputType | null;
    _sum: TablePlayerSumAggregateOutputType | null;
    _min: TablePlayerMinAggregateOutputType | null;
    _max: TablePlayerMaxAggregateOutputType | null;
};
type GetTablePlayerGroupByPayload<T extends TablePlayerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TablePlayerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TablePlayerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TablePlayerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TablePlayerGroupByOutputType[P]>;
}>>;
export type TablePlayerWhereInput = {
    AND?: Prisma.TablePlayerWhereInput | Prisma.TablePlayerWhereInput[];
    OR?: Prisma.TablePlayerWhereInput[];
    NOT?: Prisma.TablePlayerWhereInput | Prisma.TablePlayerWhereInput[];
    id?: Prisma.StringFilter<"TablePlayer"> | string;
    position?: Prisma.IntNullableFilter<"TablePlayer"> | number | null;
    pointsAwarded?: Prisma.DecimalNullableFilter<"TablePlayer"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.IntNullableFilter<"TablePlayer"> | number | null;
    tableId?: Prisma.StringFilter<"TablePlayer"> | string;
    playerId?: Prisma.StringFilter<"TablePlayer"> | string;
    table?: Prisma.XOR<Prisma.TableScalarRelationFilter, Prisma.TableWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
};
export type TablePlayerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrderInput | Prisma.SortOrder;
    lives?: Prisma.SortOrderInput | Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    table?: Prisma.TableOrderByWithRelationInput;
    player?: Prisma.PlayerOrderByWithRelationInput;
};
export type TablePlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TablePlayerWhereInput | Prisma.TablePlayerWhereInput[];
    OR?: Prisma.TablePlayerWhereInput[];
    NOT?: Prisma.TablePlayerWhereInput | Prisma.TablePlayerWhereInput[];
    position?: Prisma.IntNullableFilter<"TablePlayer"> | number | null;
    pointsAwarded?: Prisma.DecimalNullableFilter<"TablePlayer"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.IntNullableFilter<"TablePlayer"> | number | null;
    tableId?: Prisma.StringFilter<"TablePlayer"> | string;
    playerId?: Prisma.StringFilter<"TablePlayer"> | string;
    table?: Prisma.XOR<Prisma.TableScalarRelationFilter, Prisma.TableWhereInput>;
    player?: Prisma.XOR<Prisma.PlayerScalarRelationFilter, Prisma.PlayerWhereInput>;
}, "id">;
export type TablePlayerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrderInput | Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrderInput | Prisma.SortOrder;
    lives?: Prisma.SortOrderInput | Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
    _count?: Prisma.TablePlayerCountOrderByAggregateInput;
    _avg?: Prisma.TablePlayerAvgOrderByAggregateInput;
    _max?: Prisma.TablePlayerMaxOrderByAggregateInput;
    _min?: Prisma.TablePlayerMinOrderByAggregateInput;
    _sum?: Prisma.TablePlayerSumOrderByAggregateInput;
};
export type TablePlayerScalarWhereWithAggregatesInput = {
    AND?: Prisma.TablePlayerScalarWhereWithAggregatesInput | Prisma.TablePlayerScalarWhereWithAggregatesInput[];
    OR?: Prisma.TablePlayerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TablePlayerScalarWhereWithAggregatesInput | Prisma.TablePlayerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TablePlayer"> | string;
    position?: Prisma.IntNullableWithAggregatesFilter<"TablePlayer"> | number | null;
    pointsAwarded?: Prisma.DecimalNullableWithAggregatesFilter<"TablePlayer"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.IntNullableWithAggregatesFilter<"TablePlayer"> | number | null;
    tableId?: Prisma.StringWithAggregatesFilter<"TablePlayer"> | string;
    playerId?: Prisma.StringWithAggregatesFilter<"TablePlayer"> | string;
};
export type TablePlayerCreateInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    table: Prisma.TableCreateNestedOneWithoutPlayersInput;
    player: Prisma.PlayerCreateNestedOneWithoutTablePlayersInput;
};
export type TablePlayerUncheckedCreateInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    tableId: string;
    playerId: string;
};
export type TablePlayerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    table?: Prisma.TableUpdateOneRequiredWithoutPlayersNestedInput;
    player?: Prisma.PlayerUpdateOneRequiredWithoutTablePlayersNestedInput;
};
export type TablePlayerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TablePlayerCreateManyInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    tableId: string;
    playerId: string;
};
export type TablePlayerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TablePlayerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TablePlayerListRelationFilter = {
    every?: Prisma.TablePlayerWhereInput;
    some?: Prisma.TablePlayerWhereInput;
    none?: Prisma.TablePlayerWhereInput;
};
export type TablePlayerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TablePlayerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    lives?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
};
export type TablePlayerAvgOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    lives?: Prisma.SortOrder;
};
export type TablePlayerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    lives?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
};
export type TablePlayerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    lives?: Prisma.SortOrder;
    tableId?: Prisma.SortOrder;
    playerId?: Prisma.SortOrder;
};
export type TablePlayerSumOrderByAggregateInput = {
    position?: Prisma.SortOrder;
    pointsAwarded?: Prisma.SortOrder;
    lives?: Prisma.SortOrder;
};
export type TablePlayerCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutPlayerInput, Prisma.TablePlayerUncheckedCreateWithoutPlayerInput> | Prisma.TablePlayerCreateWithoutPlayerInput[] | Prisma.TablePlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutPlayerInput | Prisma.TablePlayerCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TablePlayerCreateManyPlayerInputEnvelope;
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
};
export type TablePlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutPlayerInput, Prisma.TablePlayerUncheckedCreateWithoutPlayerInput> | Prisma.TablePlayerCreateWithoutPlayerInput[] | Prisma.TablePlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutPlayerInput | Prisma.TablePlayerCreateOrConnectWithoutPlayerInput[];
    createMany?: Prisma.TablePlayerCreateManyPlayerInputEnvelope;
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
};
export type TablePlayerUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutPlayerInput, Prisma.TablePlayerUncheckedCreateWithoutPlayerInput> | Prisma.TablePlayerCreateWithoutPlayerInput[] | Prisma.TablePlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutPlayerInput | Prisma.TablePlayerCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TablePlayerUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TablePlayerUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TablePlayerCreateManyPlayerInputEnvelope;
    set?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    disconnect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    delete?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    update?: Prisma.TablePlayerUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TablePlayerUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TablePlayerUpdateManyWithWhereWithoutPlayerInput | Prisma.TablePlayerUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TablePlayerScalarWhereInput | Prisma.TablePlayerScalarWhereInput[];
};
export type TablePlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutPlayerInput, Prisma.TablePlayerUncheckedCreateWithoutPlayerInput> | Prisma.TablePlayerCreateWithoutPlayerInput[] | Prisma.TablePlayerUncheckedCreateWithoutPlayerInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutPlayerInput | Prisma.TablePlayerCreateOrConnectWithoutPlayerInput[];
    upsert?: Prisma.TablePlayerUpsertWithWhereUniqueWithoutPlayerInput | Prisma.TablePlayerUpsertWithWhereUniqueWithoutPlayerInput[];
    createMany?: Prisma.TablePlayerCreateManyPlayerInputEnvelope;
    set?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    disconnect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    delete?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    update?: Prisma.TablePlayerUpdateWithWhereUniqueWithoutPlayerInput | Prisma.TablePlayerUpdateWithWhereUniqueWithoutPlayerInput[];
    updateMany?: Prisma.TablePlayerUpdateManyWithWhereWithoutPlayerInput | Prisma.TablePlayerUpdateManyWithWhereWithoutPlayerInput[];
    deleteMany?: Prisma.TablePlayerScalarWhereInput | Prisma.TablePlayerScalarWhereInput[];
};
export type TablePlayerCreateNestedManyWithoutTableInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutTableInput, Prisma.TablePlayerUncheckedCreateWithoutTableInput> | Prisma.TablePlayerCreateWithoutTableInput[] | Prisma.TablePlayerUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutTableInput | Prisma.TablePlayerCreateOrConnectWithoutTableInput[];
    createMany?: Prisma.TablePlayerCreateManyTableInputEnvelope;
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
};
export type TablePlayerUncheckedCreateNestedManyWithoutTableInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutTableInput, Prisma.TablePlayerUncheckedCreateWithoutTableInput> | Prisma.TablePlayerCreateWithoutTableInput[] | Prisma.TablePlayerUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutTableInput | Prisma.TablePlayerCreateOrConnectWithoutTableInput[];
    createMany?: Prisma.TablePlayerCreateManyTableInputEnvelope;
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
};
export type TablePlayerUpdateManyWithoutTableNestedInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutTableInput, Prisma.TablePlayerUncheckedCreateWithoutTableInput> | Prisma.TablePlayerCreateWithoutTableInput[] | Prisma.TablePlayerUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutTableInput | Prisma.TablePlayerCreateOrConnectWithoutTableInput[];
    upsert?: Prisma.TablePlayerUpsertWithWhereUniqueWithoutTableInput | Prisma.TablePlayerUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: Prisma.TablePlayerCreateManyTableInputEnvelope;
    set?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    disconnect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    delete?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    update?: Prisma.TablePlayerUpdateWithWhereUniqueWithoutTableInput | Prisma.TablePlayerUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: Prisma.TablePlayerUpdateManyWithWhereWithoutTableInput | Prisma.TablePlayerUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: Prisma.TablePlayerScalarWhereInput | Prisma.TablePlayerScalarWhereInput[];
};
export type TablePlayerUncheckedUpdateManyWithoutTableNestedInput = {
    create?: Prisma.XOR<Prisma.TablePlayerCreateWithoutTableInput, Prisma.TablePlayerUncheckedCreateWithoutTableInput> | Prisma.TablePlayerCreateWithoutTableInput[] | Prisma.TablePlayerUncheckedCreateWithoutTableInput[];
    connectOrCreate?: Prisma.TablePlayerCreateOrConnectWithoutTableInput | Prisma.TablePlayerCreateOrConnectWithoutTableInput[];
    upsert?: Prisma.TablePlayerUpsertWithWhereUniqueWithoutTableInput | Prisma.TablePlayerUpsertWithWhereUniqueWithoutTableInput[];
    createMany?: Prisma.TablePlayerCreateManyTableInputEnvelope;
    set?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    disconnect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    delete?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    connect?: Prisma.TablePlayerWhereUniqueInput | Prisma.TablePlayerWhereUniqueInput[];
    update?: Prisma.TablePlayerUpdateWithWhereUniqueWithoutTableInput | Prisma.TablePlayerUpdateWithWhereUniqueWithoutTableInput[];
    updateMany?: Prisma.TablePlayerUpdateManyWithWhereWithoutTableInput | Prisma.TablePlayerUpdateManyWithWhereWithoutTableInput[];
    deleteMany?: Prisma.TablePlayerScalarWhereInput | Prisma.TablePlayerScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type TablePlayerCreateWithoutPlayerInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    table: Prisma.TableCreateNestedOneWithoutPlayersInput;
};
export type TablePlayerUncheckedCreateWithoutPlayerInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    tableId: string;
};
export type TablePlayerCreateOrConnectWithoutPlayerInput = {
    where: Prisma.TablePlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TablePlayerCreateWithoutPlayerInput, Prisma.TablePlayerUncheckedCreateWithoutPlayerInput>;
};
export type TablePlayerCreateManyPlayerInputEnvelope = {
    data: Prisma.TablePlayerCreateManyPlayerInput | Prisma.TablePlayerCreateManyPlayerInput[];
    skipDuplicates?: boolean;
};
export type TablePlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TablePlayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.TablePlayerUpdateWithoutPlayerInput, Prisma.TablePlayerUncheckedUpdateWithoutPlayerInput>;
    create: Prisma.XOR<Prisma.TablePlayerCreateWithoutPlayerInput, Prisma.TablePlayerUncheckedCreateWithoutPlayerInput>;
};
export type TablePlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: Prisma.TablePlayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.TablePlayerUpdateWithoutPlayerInput, Prisma.TablePlayerUncheckedUpdateWithoutPlayerInput>;
};
export type TablePlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: Prisma.TablePlayerScalarWhereInput;
    data: Prisma.XOR<Prisma.TablePlayerUpdateManyMutationInput, Prisma.TablePlayerUncheckedUpdateManyWithoutPlayerInput>;
};
export type TablePlayerScalarWhereInput = {
    AND?: Prisma.TablePlayerScalarWhereInput | Prisma.TablePlayerScalarWhereInput[];
    OR?: Prisma.TablePlayerScalarWhereInput[];
    NOT?: Prisma.TablePlayerScalarWhereInput | Prisma.TablePlayerScalarWhereInput[];
    id?: Prisma.StringFilter<"TablePlayer"> | string;
    position?: Prisma.IntNullableFilter<"TablePlayer"> | number | null;
    pointsAwarded?: Prisma.DecimalNullableFilter<"TablePlayer"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.IntNullableFilter<"TablePlayer"> | number | null;
    tableId?: Prisma.StringFilter<"TablePlayer"> | string;
    playerId?: Prisma.StringFilter<"TablePlayer"> | string;
};
export type TablePlayerCreateWithoutTableInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    player: Prisma.PlayerCreateNestedOneWithoutTablePlayersInput;
};
export type TablePlayerUncheckedCreateWithoutTableInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    playerId: string;
};
export type TablePlayerCreateOrConnectWithoutTableInput = {
    where: Prisma.TablePlayerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TablePlayerCreateWithoutTableInput, Prisma.TablePlayerUncheckedCreateWithoutTableInput>;
};
export type TablePlayerCreateManyTableInputEnvelope = {
    data: Prisma.TablePlayerCreateManyTableInput | Prisma.TablePlayerCreateManyTableInput[];
    skipDuplicates?: boolean;
};
export type TablePlayerUpsertWithWhereUniqueWithoutTableInput = {
    where: Prisma.TablePlayerWhereUniqueInput;
    update: Prisma.XOR<Prisma.TablePlayerUpdateWithoutTableInput, Prisma.TablePlayerUncheckedUpdateWithoutTableInput>;
    create: Prisma.XOR<Prisma.TablePlayerCreateWithoutTableInput, Prisma.TablePlayerUncheckedCreateWithoutTableInput>;
};
export type TablePlayerUpdateWithWhereUniqueWithoutTableInput = {
    where: Prisma.TablePlayerWhereUniqueInput;
    data: Prisma.XOR<Prisma.TablePlayerUpdateWithoutTableInput, Prisma.TablePlayerUncheckedUpdateWithoutTableInput>;
};
export type TablePlayerUpdateManyWithWhereWithoutTableInput = {
    where: Prisma.TablePlayerScalarWhereInput;
    data: Prisma.XOR<Prisma.TablePlayerUpdateManyMutationInput, Prisma.TablePlayerUncheckedUpdateManyWithoutTableInput>;
};
export type TablePlayerCreateManyPlayerInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    tableId: string;
};
export type TablePlayerUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    table?: Prisma.TableUpdateOneRequiredWithoutPlayersNestedInput;
};
export type TablePlayerUncheckedUpdateWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TablePlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tableId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TablePlayerCreateManyTableInput = {
    id?: string;
    position?: number | null;
    pointsAwarded?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: number | null;
    playerId: string;
};
export type TablePlayerUpdateWithoutTableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    player?: Prisma.PlayerUpdateOneRequiredWithoutTablePlayersNestedInput;
};
export type TablePlayerUncheckedUpdateWithoutTableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TablePlayerUncheckedUpdateManyWithoutTableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    position?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pointsAwarded?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    lives?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    playerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TablePlayerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    position?: boolean;
    pointsAwarded?: boolean;
    lives?: boolean;
    tableId?: boolean;
    playerId?: boolean;
    table?: boolean | Prisma.TableDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tablePlayer"]>;
export type TablePlayerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    position?: boolean;
    pointsAwarded?: boolean;
    lives?: boolean;
    tableId?: boolean;
    playerId?: boolean;
    table?: boolean | Prisma.TableDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tablePlayer"]>;
export type TablePlayerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    position?: boolean;
    pointsAwarded?: boolean;
    lives?: boolean;
    tableId?: boolean;
    playerId?: boolean;
    table?: boolean | Prisma.TableDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tablePlayer"]>;
export type TablePlayerSelectScalar = {
    id?: boolean;
    position?: boolean;
    pointsAwarded?: boolean;
    lives?: boolean;
    tableId?: boolean;
    playerId?: boolean;
};
export type TablePlayerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "position" | "pointsAwarded" | "lives" | "tableId" | "playerId", ExtArgs["result"]["tablePlayer"]>;
export type TablePlayerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    table?: boolean | Prisma.TableDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type TablePlayerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    table?: boolean | Prisma.TableDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type TablePlayerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    table?: boolean | Prisma.TableDefaultArgs<ExtArgs>;
    player?: boolean | Prisma.PlayerDefaultArgs<ExtArgs>;
};
export type $TablePlayerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TablePlayer";
    objects: {
        table: Prisma.$TablePayload<ExtArgs>;
        player: Prisma.$PlayerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        position: number | null;
        pointsAwarded: runtime.Decimal | null;
        lives: number | null;
        tableId: string;
        playerId: string;
    }, ExtArgs["result"]["tablePlayer"]>;
    composites: {};
};
export type TablePlayerGetPayload<S extends boolean | null | undefined | TablePlayerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload, S>;
export type TablePlayerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TablePlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TablePlayerCountAggregateInputType | true;
};
export interface TablePlayerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TablePlayer'];
        meta: {
            name: 'TablePlayer';
        };
    };
    /**
     * Find zero or one TablePlayer that matches the filter.
     * @param {TablePlayerFindUniqueArgs} args - Arguments to find a TablePlayer
     * @example
     * // Get one TablePlayer
     * const tablePlayer = await prisma.tablePlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TablePlayerFindUniqueArgs>(args: Prisma.SelectSubset<T, TablePlayerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one TablePlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TablePlayerFindUniqueOrThrowArgs} args - Arguments to find a TablePlayer
     * @example
     * // Get one TablePlayer
     * const tablePlayer = await prisma.tablePlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TablePlayerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TablePlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TablePlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerFindFirstArgs} args - Arguments to find a TablePlayer
     * @example
     * // Get one TablePlayer
     * const tablePlayer = await prisma.tablePlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TablePlayerFindFirstArgs>(args?: Prisma.SelectSubset<T, TablePlayerFindFirstArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first TablePlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerFindFirstOrThrowArgs} args - Arguments to find a TablePlayer
     * @example
     * // Get one TablePlayer
     * const tablePlayer = await prisma.tablePlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TablePlayerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TablePlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more TablePlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TablePlayers
     * const tablePlayers = await prisma.tablePlayer.findMany()
     *
     * // Get first 10 TablePlayers
     * const tablePlayers = await prisma.tablePlayer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tablePlayerWithIdOnly = await prisma.tablePlayer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TablePlayerFindManyArgs>(args?: Prisma.SelectSubset<T, TablePlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a TablePlayer.
     * @param {TablePlayerCreateArgs} args - Arguments to create a TablePlayer.
     * @example
     * // Create one TablePlayer
     * const TablePlayer = await prisma.tablePlayer.create({
     *   data: {
     *     // ... data to create a TablePlayer
     *   }
     * })
     *
     */
    create<T extends TablePlayerCreateArgs>(args: Prisma.SelectSubset<T, TablePlayerCreateArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many TablePlayers.
     * @param {TablePlayerCreateManyArgs} args - Arguments to create many TablePlayers.
     * @example
     * // Create many TablePlayers
     * const tablePlayer = await prisma.tablePlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TablePlayerCreateManyArgs>(args?: Prisma.SelectSubset<T, TablePlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many TablePlayers and returns the data saved in the database.
     * @param {TablePlayerCreateManyAndReturnArgs} args - Arguments to create many TablePlayers.
     * @example
     * // Create many TablePlayers
     * const tablePlayer = await prisma.tablePlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TablePlayers and only return the `id`
     * const tablePlayerWithIdOnly = await prisma.tablePlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TablePlayerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TablePlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a TablePlayer.
     * @param {TablePlayerDeleteArgs} args - Arguments to delete one TablePlayer.
     * @example
     * // Delete one TablePlayer
     * const TablePlayer = await prisma.tablePlayer.delete({
     *   where: {
     *     // ... filter to delete one TablePlayer
     *   }
     * })
     *
     */
    delete<T extends TablePlayerDeleteArgs>(args: Prisma.SelectSubset<T, TablePlayerDeleteArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one TablePlayer.
     * @param {TablePlayerUpdateArgs} args - Arguments to update one TablePlayer.
     * @example
     * // Update one TablePlayer
     * const tablePlayer = await prisma.tablePlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TablePlayerUpdateArgs>(args: Prisma.SelectSubset<T, TablePlayerUpdateArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more TablePlayers.
     * @param {TablePlayerDeleteManyArgs} args - Arguments to filter TablePlayers to delete.
     * @example
     * // Delete a few TablePlayers
     * const { count } = await prisma.tablePlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TablePlayerDeleteManyArgs>(args?: Prisma.SelectSubset<T, TablePlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TablePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TablePlayers
     * const tablePlayer = await prisma.tablePlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TablePlayerUpdateManyArgs>(args: Prisma.SelectSubset<T, TablePlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more TablePlayers and returns the data updated in the database.
     * @param {TablePlayerUpdateManyAndReturnArgs} args - Arguments to update many TablePlayers.
     * @example
     * // Update many TablePlayers
     * const tablePlayer = await prisma.tablePlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TablePlayers and only return the `id`
     * const tablePlayerWithIdOnly = await prisma.tablePlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends TablePlayerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TablePlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one TablePlayer.
     * @param {TablePlayerUpsertArgs} args - Arguments to update or create a TablePlayer.
     * @example
     * // Update or create a TablePlayer
     * const tablePlayer = await prisma.tablePlayer.upsert({
     *   create: {
     *     // ... data to create a TablePlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TablePlayer we want to update
     *   }
     * })
     */
    upsert<T extends TablePlayerUpsertArgs>(args: Prisma.SelectSubset<T, TablePlayerUpsertArgs<ExtArgs>>): Prisma.Prisma__TablePlayerClient<runtime.Types.Result.GetResult<Prisma.$TablePlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of TablePlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerCountArgs} args - Arguments to filter TablePlayers to count.
     * @example
     * // Count the number of TablePlayers
     * const count = await prisma.tablePlayer.count({
     *   where: {
     *     // ... the filter for the TablePlayers we want to count
     *   }
     * })
    **/
    count<T extends TablePlayerCountArgs>(args?: Prisma.Subset<T, TablePlayerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TablePlayerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a TablePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TablePlayerAggregateArgs>(args: Prisma.Subset<T, TablePlayerAggregateArgs>): Prisma.PrismaPromise<GetTablePlayerAggregateType<T>>;
    /**
     * Group by TablePlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TablePlayerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TablePlayerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TablePlayerGroupByArgs['orderBy'];
    } : {
        orderBy?: TablePlayerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TablePlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTablePlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TablePlayer model
     */
    readonly fields: TablePlayerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for TablePlayer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TablePlayerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    table<T extends Prisma.TableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TableDefaultArgs<ExtArgs>>): Prisma.Prisma__TableClient<runtime.Types.Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    player<T extends Prisma.PlayerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlayerDefaultArgs<ExtArgs>>): Prisma.Prisma__PlayerClient<runtime.Types.Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the TablePlayer model
 */
export interface TablePlayerFieldRefs {
    readonly id: Prisma.FieldRef<"TablePlayer", 'String'>;
    readonly position: Prisma.FieldRef<"TablePlayer", 'Int'>;
    readonly pointsAwarded: Prisma.FieldRef<"TablePlayer", 'Decimal'>;
    readonly lives: Prisma.FieldRef<"TablePlayer", 'Int'>;
    readonly tableId: Prisma.FieldRef<"TablePlayer", 'String'>;
    readonly playerId: Prisma.FieldRef<"TablePlayer", 'String'>;
}
/**
 * TablePlayer findUnique
 */
export type TablePlayerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TablePlayer to fetch.
     */
    where: Prisma.TablePlayerWhereUniqueInput;
};
/**
 * TablePlayer findUniqueOrThrow
 */
export type TablePlayerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TablePlayer to fetch.
     */
    where: Prisma.TablePlayerWhereUniqueInput;
};
/**
 * TablePlayer findFirst
 */
export type TablePlayerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TablePlayer to fetch.
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TablePlayers to fetch.
     */
    orderBy?: Prisma.TablePlayerOrderByWithRelationInput | Prisma.TablePlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TablePlayers.
     */
    cursor?: Prisma.TablePlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TablePlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TablePlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TablePlayers.
     */
    distinct?: Prisma.TablePlayerScalarFieldEnum | Prisma.TablePlayerScalarFieldEnum[];
};
/**
 * TablePlayer findFirstOrThrow
 */
export type TablePlayerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TablePlayer to fetch.
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TablePlayers to fetch.
     */
    orderBy?: Prisma.TablePlayerOrderByWithRelationInput | Prisma.TablePlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TablePlayers.
     */
    cursor?: Prisma.TablePlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TablePlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TablePlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TablePlayers.
     */
    distinct?: Prisma.TablePlayerScalarFieldEnum | Prisma.TablePlayerScalarFieldEnum[];
};
/**
 * TablePlayer findMany
 */
export type TablePlayerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * Filter, which TablePlayers to fetch.
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TablePlayers to fetch.
     */
    orderBy?: Prisma.TablePlayerOrderByWithRelationInput | Prisma.TablePlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TablePlayers.
     */
    cursor?: Prisma.TablePlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TablePlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TablePlayers.
     */
    skip?: number;
    distinct?: Prisma.TablePlayerScalarFieldEnum | Prisma.TablePlayerScalarFieldEnum[];
};
/**
 * TablePlayer create
 */
export type TablePlayerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * The data needed to create a TablePlayer.
     */
    data: Prisma.XOR<Prisma.TablePlayerCreateInput, Prisma.TablePlayerUncheckedCreateInput>;
};
/**
 * TablePlayer createMany
 */
export type TablePlayerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many TablePlayers.
     */
    data: Prisma.TablePlayerCreateManyInput | Prisma.TablePlayerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * TablePlayer createManyAndReturn
 */
export type TablePlayerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * The data used to create many TablePlayers.
     */
    data: Prisma.TablePlayerCreateManyInput | Prisma.TablePlayerCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * TablePlayer update
 */
export type TablePlayerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * The data needed to update a TablePlayer.
     */
    data: Prisma.XOR<Prisma.TablePlayerUpdateInput, Prisma.TablePlayerUncheckedUpdateInput>;
    /**
     * Choose, which TablePlayer to update.
     */
    where: Prisma.TablePlayerWhereUniqueInput;
};
/**
 * TablePlayer updateMany
 */
export type TablePlayerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update TablePlayers.
     */
    data: Prisma.XOR<Prisma.TablePlayerUpdateManyMutationInput, Prisma.TablePlayerUncheckedUpdateManyInput>;
    /**
     * Filter which TablePlayers to update
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * Limit how many TablePlayers to update.
     */
    limit?: number;
};
/**
 * TablePlayer updateManyAndReturn
 */
export type TablePlayerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * The data used to update TablePlayers.
     */
    data: Prisma.XOR<Prisma.TablePlayerUpdateManyMutationInput, Prisma.TablePlayerUncheckedUpdateManyInput>;
    /**
     * Filter which TablePlayers to update
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * Limit how many TablePlayers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * TablePlayer upsert
 */
export type TablePlayerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * The filter to search for the TablePlayer to update in case it exists.
     */
    where: Prisma.TablePlayerWhereUniqueInput;
    /**
     * In case the TablePlayer found by the `where` argument doesn't exist, create a new TablePlayer with this data.
     */
    create: Prisma.XOR<Prisma.TablePlayerCreateInput, Prisma.TablePlayerUncheckedCreateInput>;
    /**
     * In case the TablePlayer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TablePlayerUpdateInput, Prisma.TablePlayerUncheckedUpdateInput>;
};
/**
 * TablePlayer delete
 */
export type TablePlayerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
    /**
     * Filter which TablePlayer to delete.
     */
    where: Prisma.TablePlayerWhereUniqueInput;
};
/**
 * TablePlayer deleteMany
 */
export type TablePlayerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which TablePlayers to delete
     */
    where?: Prisma.TablePlayerWhereInput;
    /**
     * Limit how many TablePlayers to delete.
     */
    limit?: number;
};
/**
 * TablePlayer without action
 */
export type TablePlayerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TablePlayer
     */
    select?: Prisma.TablePlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TablePlayer
     */
    omit?: Prisma.TablePlayerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TablePlayerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=TablePlayer.d.ts.map