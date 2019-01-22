const { parseQuery, parseTemplate } = window;

describe("parseQuery", () => {
  it("must exists", () => {
    expect(typeof parseQuery).toBe("function");
  });
  it("must return empty object when no query params", () => {
    expect(parseQuery({ search: "" })).toMatchObject({});
  });
  it("must return empty object when no query params but query set", () => {
    expect(parseQuery({ search: "?" })).toMatchObject({});
  });
  it("must return a:'1' for query ?a=1", () => {
    expect(parseQuery({ search: "?a=1" })).toMatchObject({ a: "1" });
  });
  it("must return a:'mortadela' for query ?a=mortadela", () => {
    expect(parseQuery({ search: "?a=mortadela" })).toMatchObject({
      a: "mortadela"
    });
  });
  it("must return a:mortadela, b:salame for query ?a=mortadela&b=salame", () => {
    expect(parseQuery({ search: "?a=mortadela&b=salame" })).toMatchObject({
      a: "mortadela",
      b: "salame"
    });
  });
  it("must return a:undefined for query ?a", () => {
    expect(parseQuery({ search: "?a" })).toMatchObject({
      a: undefined
    });
  });
  it("must return a:batata frita for query ?a=batata%20frita", () => {
    expect(parseQuery({ search: "?a=batata%20frita" })).toMatchObject({
      a: "batata frita"
    });
  });
  it("must return a:undefined,b:salame for query ?a&b=salame", () => {
    expect(parseQuery({ search: "?a&b=salame" })).toMatchObject({
      a: undefined,
      b: "salame"
    });
  });
});

describe("parseTemplate", () => {
  it("must return same string as output if no template given", () => {
    expect(parseTemplate("teste")).toBe("teste");
  });
  it("must return 'batata' as output if template is {{a}} and params a:batata", () => {
    expect(parseTemplate("{{a}}", { a: "batata" })).toBe("batata");
  });
  it("must return 'batata is great' as output if template is {{a}} is great and params a:batata", () => {
    expect(parseTemplate("{{a}} is great", { a: "batata" })).toBe(
      "batata is great"
    );
  });
  it("must return 'batata ovo' as output if template is {{a}} {{b}} and params a:batata, b:ovo", () => {
    expect(parseTemplate("{{a}} {{b}}", { a: "batata", b: "ovo" })).toBe(
      "batata ovo"
    );
  });
  it("must return 'batata batata batata' as output if template is {{a}} {{a}} {{a}} and params a:batata", () => {
    expect(parseTemplate("{{a}} {{a}} {{a}}", { a: "batata" })).toBe(
      "batata batata batata"
    );
  });
});
