"use client";

import { useApp } from "@/contexts/AppContext";
import Segments from "@/components/Segments";

export default function CashPlusPhone() {
  const { t } = useApp();
  const ui = t.proj.ui;

  const bars = [30, 55, 42, 70, 48, 88, 65, 52, 38, 62, 70, 45];

  return (
    <div className="phone">
      <div className="phone__screen">
        <div className="phone__inner">
          <div className="pui-top">
            <span>9:41</span>
            <span>{ui.greet}</span>
          </div>

          <div className="pui-balance">
            <div className="l">{ui.balL}</div>
            <div className="v">
              <Segments parts={ui.balV} />
            </div>
            <div className="delta">{ui.balD}</div>
            <div className="pui-spark">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          <div className="pui-sec-h">
            <span>{ui.upcoming}</span>
            <span className="ct">04</span>
          </div>

          <div className="pui-list">
            <div className="pui-sub flag">
              <div className="ic" style={{ background: "#ff5b5b" }}>
                N
              </div>
              <div>
                <div className="n">Netflix Premium</div>
                <div className="s">{ui.sub1}</div>
              </div>
              <div className="p">$22.99</div>
            </div>
            <div className="pui-sub">
              <div className="ic" style={{ background: "#1db954" }}>
                S
              </div>
              <div>
                <div className="n">Spotify Family</div>
                <div className="s">{ui.sub2}</div>
              </div>
              <div className="p">$16.99</div>
            </div>
            <div className="pui-sub">
              <div className="ic" style={{ background: "#c8f15a" }}>
                F
              </div>
              <div>
                <div className="n">Figma Pro</div>
                <div className="s">{ui.sub3}</div>
              </div>
              <div className="p">$15.00</div>
            </div>
            <div className="pui-sub">
              <div className="ic" style={{ background: "#a78bfa" }}>
                A
              </div>
              <div>
                <div className="n">Adobe CC</div>
                <div className="s">{ui.sub4}</div>
              </div>
              <div className="p">$54.99</div>
            </div>
          </div>

          <div className="pui-cta">{ui.cta}</div>
        </div>
      </div>
    </div>
  );
}
