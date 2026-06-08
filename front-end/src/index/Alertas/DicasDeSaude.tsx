import dicas from "./dicas.json";

const dica = dicas.Dicas[2];

function DicasDeSaude() {
  return (
    <>
      <div className="bg-primary-container text-on-primary-container rounded-xl p-lg shadow-lg relative overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-title-md mb-md flex items-center gap-sm">
            <span className="material-symbols-outlined">lightbulb</span>
            Dica de Saúde do Dia
          </h3>

          <p className="text-body-md opacity-90 mb-lg">
            {dica.mensagem}
          </p>

          <img
            alt="Fresh vegetables and water"
            className="w-full h-32 object-cover rounded-lg mb-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEFZNUeQHjhb4NioigdFlN5mEPB3_A7XTdizQWPCLi36ApxQS-NTqtP_7jT8W1o43Lck-qC8CVmcdbHIubObNozThow2QuPKFk9JbaMMlfofWwTwFeOaZ0dOUHH1p88Ch69lQje64SYb1WwI20_PDiRpIVh5ITg26onFs0uoX46QAOf3wJ7Ob-SNPm5K089VYfp7iyxIvb6bbzROhHekiLYUH2CG1TGPhuahRfjRyWO49HH0he9D2gYmgeS0wOauba2--xI6TmUas"
          />

          <a
            className="text-on-primary-container underline text-label-sm"
            href="#"
          >
            Leia mais sobre dicas saudáveis
          </a>
        </div>

        <div className="absolute -right-8 -bottom-8 opacity-10">
          <span
            className="material-symbols-outlined text-9xl"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            healing
          </span>
        </div>
      </div>
    </>
  );
}

export default DicasDeSaude;