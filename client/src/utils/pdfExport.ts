import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

// Tipo de dados do resultado
export interface PdfCalculationResult {
  pumpModel: string;
  pumpType: string;
  efficiency: number;
  power: number;
  npsh: number;
  flowRate: number;
  head: number;
  rotationSpeed: number;
  specificRecommendations?: string[];
}

// Configuração para tamanho A4
const PDF_WIDTH = 210;
const PDF_HEIGHT = 297;
const MARGIN = 15;

// Logo da FB Bombas
const FB_LOGO_COLOR = 'https://www.dropbox.com/scl/fi/3hjg3gcahqeiskzvgcxqp/Design-sem-nome-43.png?rlkey=thvxu22yqp6n7knif1y4tqzsj&st=x8zc7hpm&raw=1';

interface GeneratePdfOptions {
  flowRate: number;
  head: number;
  viscosity: number;
  temperature: number;
  density: number;
  fluidType: string;
  rotationSpeed: number;
  pumpType: string;
  flowUnit: string;
  language: string;
}

/**
 * Função para gerar PDF com resultado da calculadora
 * @param result Resultado do cálculo
 * @param options Opções e parâmetros utilizados
 */
export const generatePumpSelectionPdf = async (
  result: PdfCalculationResult,
  options: GeneratePdfOptions,
  chartRef: HTMLDivElement | null
): Promise<void> => {
  try {
    // Criar instância do PDF
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Função para traduzir textos
    const t = (key: string, defaultText: string): string => {
      // Implementação básica - em produção seria integrada com o sistema de tradução
      return defaultText;
    };

    // Configurações de fonte
    doc.setFont('helvetica', 'normal');
    
    // Cabeçalho
    // Adicionar logo da FB Bombas
    try {
      // Usar um logo incorporado ao invés de carregar do Dropbox
      // Logo da FB Bombas em base64 (versão simplificada para evitar problemas de CORS)
      const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAvCAYAAAC/0tLeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wOS0wMVQwODo0MToxNy0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wOS0wMVQwODo0MToxNy0wMzowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InByb2R1Y2VkIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OndoZW49IjIwMjMtMDktMDFUMDg6Mzk6NTAtMDM6MDAiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6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';
      
      doc.addImage(logoBase64, 'PNG', MARGIN, MARGIN, 40, 15);
    } catch (error) {
      console.error('Erro ao carregar logo:', error);
      // Fallback: adicionar texto no lugar da logo
      doc.setFontSize(20);
      doc.setTextColor(227, 6, 19); // #E30613
      doc.text('FB BOMBAS', MARGIN, MARGIN + 10);
    }
    
    // Título do documento
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text('Relatório de Seleção de Bomba', MARGIN, MARGIN + 25);
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Data: ' + new Date().toLocaleDateString(), MARGIN, MARGIN + 32);
    
    // Linha divisória
    doc.setDrawColor(0, 59, 113); // #003B71
    doc.setLineWidth(0.5);
    doc.line(MARGIN, MARGIN + 35, PDF_WIDTH - MARGIN, MARGIN + 35);
    
    // Seção 1: Resultado Principal
    doc.setFontSize(14);
    doc.setTextColor(0, 59, 113); // #003B71
    doc.text('Bomba Selecionada', MARGIN, MARGIN + 45);
    
    // Box com resultado principal
    doc.setFillColor(245, 245, 250);
    doc.roundedRect(MARGIN, MARGIN + 50, PDF_WIDTH - MARGIN * 2, 30, 3, 3, 'F');
    
    // Modelo e tipo
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(result.pumpModel, MARGIN + 5, MARGIN + 60);
    
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text(result.pumpType, MARGIN + 5, MARGIN + 65);
    
    // Dados principais
    doc.setFontSize(12);
    const col1X = MARGIN + 100;
    const col2X = MARGIN + 150;
    
    doc.setTextColor(80, 80, 80);
    doc.text('Vazão:', col1X, MARGIN + 58);
    doc.text('Altura:', col1X, MARGIN + 65);
    doc.text('Eficiência:', col1X, MARGIN + 72);
    
    doc.setTextColor(0, 0, 0);
    doc.text(`${result.flowRate.toFixed(1)} m³/h`, col2X, MARGIN + 58);
    doc.text(`${result.head.toFixed(1)} m`, col2X, MARGIN + 65);
    doc.text(`${result.efficiency.toFixed(1)} %`, col2X, MARGIN + 72);
    
    // Seção 2: Gráfico
    doc.setFontSize(14);
    doc.setTextColor(0, 59, 113); // #003B71
    doc.text('Curvas de Desempenho', MARGIN, MARGIN + 90);
    
    // Adicionar gráfico como imagem
    if (chartRef) {
      try {
        const canvas = await html2canvas(chartRef, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#FFFFFF',
        });
        
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', MARGIN, MARGIN + 95, PDF_WIDTH - MARGIN * 2, 70);
      } catch (e) {
        console.error('Erro ao capturar gráfico:', e);
        // Fallback se não conseguir capturar o gráfico
        doc.setFillColor(245, 245, 250);
        doc.roundedRect(MARGIN, MARGIN + 95, PDF_WIDTH - MARGIN * 2, 70, 3, 3, 'F');
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text('Gráfico de desempenho não disponível', MARGIN + 30, MARGIN + 130);
      }
    } else {
      // Fallback se não conseguir capturar o gráfico
      doc.setFillColor(245, 245, 250);
      doc.roundedRect(MARGIN, MARGIN + 95, PDF_WIDTH - MARGIN * 2, 70, 3, 3, 'F');
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text('Gráfico de desempenho não disponível', MARGIN + 30, MARGIN + 130);
    }
    
    // Seção 3: Tabela de dados técnicos
    doc.setFontSize(14);
    doc.setTextColor(0, 59, 113); // #003B71
    doc.text('Dados Técnicos', MARGIN, MARGIN + 175);
    
    // Tabela de parâmetros
    const tableData = [
      ['Parâmetro', 'Valor'],
      ['Modelo da Bomba', result.pumpModel],
      ['Tipo de Bomba', result.pumpType],
      ['Vazão', `${result.flowRate.toFixed(1)} m³/h`],
      ['Altura Manométrica', `${result.head.toFixed(1)} m`],
      ['Potência', `${result.power.toFixed(2)} kW`],
      ['Eficiência', `${result.efficiency.toFixed(1)} %`],
      ['NPSH Requerido', `${result.npsh.toFixed(2)} m`],
      ['Rotação', `${result.rotationSpeed} RPM`],
    ];
    
    // @ts-ignore - jspdf-autotable
    doc.autoTable({
      head: [tableData[0]],
      body: tableData.slice(1),
      startY: MARGIN + 180,
      margin: { left: MARGIN, right: MARGIN },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [0, 59, 113], // #003B71
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [245, 245, 250],
      },
    });
    
    // Seção 4: Parâmetros da aplicação
    const currentY = (doc as any).lastAutoTable.finalY + 10;
    
    doc.setFontSize(14);
    doc.setTextColor(0, 59, 113); // #003B71
    doc.text('Parâmetros da Aplicação', MARGIN, currentY);
    
    // Tabela de parâmetros da aplicação
    const fluidMap: Record<string, string> = {
      'water': 'Água',
      'seaWater': 'Água do Mar',
      'thermalOil': 'Óleo Térmico',
      'hydraulicOil': 'Óleo Hidráulico',
      'glycol': 'Solução de Glicol',
      'custom': 'Fluido Customizado',
    };
    
    const applicationData = [
      ['Parâmetro', 'Valor'],
      ['Fluido', fluidMap[options.fluidType] || options.fluidType],
      ['Vazão Requerida', `${options.flowRate.toFixed(1)} ${options.flowUnit === 'lpm' ? 'L/min' : options.flowUnit === 'lph' ? 'L/h' : 'm³/h'}`],
      ['Altura Requerida', `${options.head.toFixed(1)} m`],
      ['Viscosidade', `${options.viscosity.toFixed(1)} cP`],
      ['Densidade', `${options.density.toFixed(1)} kg/m³`],
      ['Temperatura', `${options.temperature.toFixed(1)} °C`],
      ['Rotação', `${options.rotationSpeed} RPM`],
      ['Tipo de Bomba', options.pumpType],
    ];
    
    // @ts-ignore - jspdf-autotable
    doc.autoTable({
      head: [applicationData[0]],
      body: applicationData.slice(1),
      startY: currentY + 5,
      margin: { left: MARGIN, right: MARGIN },
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [227, 6, 19], // #E30613
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      alternateRowStyles: {
        fillColor: [245, 245, 250],
      },
    });
    
    // Recomendações (se houverem)
    if (result.specificRecommendations && result.specificRecommendations.length > 0) {
      const recY = (doc as any).lastAutoTable.finalY + 10;
      
      doc.setFontSize(14);
      doc.setTextColor(0, 59, 113); // #003B71
      doc.text('Recomendações', MARGIN, recY);
      
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      
      let recTextY = recY + 8;
      result.specificRecommendations.forEach((rec, index) => {
        doc.text(`• ${rec}`, MARGIN, recTextY);
        recTextY += 6;
      });
    }
    
    // Rodapé
    const footerY = PDF_HEIGHT - MARGIN;
    
    doc.setDrawColor(0, 59, 113); // #003B71
    doc.setLineWidth(0.5);
    doc.line(MARGIN, footerY - 10, PDF_WIDTH - MARGIN, footerY - 10);
    
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('FB Bombas - Soluções em Bombeamento desde 1944', MARGIN, footerY - 5);
    doc.text('© FB Bombas ' + new Date().getFullYear(), PDF_WIDTH - MARGIN - 35, footerY - 5);
    
    // Salvar o PDF
    doc.save(`FB_Bombas_${result.pumpModel.replace(/\s+/g, '_')}_${new Date().getTime()}.pdf`);
    
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    alert('Erro ao gerar o PDF. Por favor, tente novamente.');
  }
};